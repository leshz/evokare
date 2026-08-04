# Security Review — Evokare

**Date**: 2026-06-04
**Scope**: Backend (Strapi 5) + Frontend (Next.js 16 App Router)
**Reviewer**: Claude Code (security-best-practices + react-best-practices)

---

## Summary

| Severity | Count |
|----------|-------|
| 🔴 Critical | 2 |
| 🟡 Moderate | 3 |
| 🟢 Minor | 3 |
| **Total** | **8** |

---

## 🔴 Critical

### SEC-01 — CORS abierto en Strapi

**File**: `backend/config/middlewares.ts:34`

`strapi::cors` está registrado sin configuración explícita. El comportamiento por defecto en producción permite peticiones desde cualquier origen (`*`), exponiendo todos los endpoints de la API a peticiones cross-origin arbitrarias.

**Fix**:
```typescript
// backend/config/middlewares.ts
{
  name: 'strapi::cors',
  config: {
    enabled: true,
    headers: '*',
    origin: [
      env('FRONTEND_URL', 'http://localhost:3000'),
      'https://elisahorta.com',
      'https://www.elisahorta.com',
    ],
  },
},
```

Agregar al `.env` de producción:
```env
FRONTEND_URL=https://elisahorta.com
```

---

### SEC-02 — Sin rate limiting en endpoints de formulario

**Files**: `backend/src/api/cita/routes/cita.ts`, `backend/src/api/mensaje-contacto/routes/mensaje-contacto.ts`

Ambas colecciones usan `factories.createCoreRouter` sin restricciones de frecuencia. No hay ninguna capa que limite la cantidad de POSTs por IP, lo que expone los endpoints a spam masivo y abuso de datos de contacto.

**Fix** — Middleware custom de rate limiting por ruta:
```typescript
// backend/src/middlewares/rate-limit.ts
import { rateLimit } from 'express-rate-limit';

export default (config, { strapi }) => {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5,
    message: { error: 'Demasiadas solicitudes. Intenta en 15 minutos.' },
    standardHeaders: true,
    legacyHeaders: false,
  });

  return async (ctx, next) => {
    await new Promise((resolve, reject) =>
      limiter(ctx.req, ctx.res, (err) => (err ? reject(err) : resolve(null)))
    );
    await next();
  };
};
```

Registrar en `middlewares.ts` y aplicar a las rutas de `cita` y `mensaje-contacto`.

---

## 🟡 Moderate

### SEC-03 — JSON-LD inyectado sin escape de `</script>`

**Files**:
- `frontend/src/app/blogs/[slug]/page.tsx:74`
- `frontend/src/app/productos/[slug]/page.tsx:115-118`

`JSON.stringify` de datos provenientes del CMS se inyecta directamente en `dangerouslySetInnerHTML`. Si un campo de Strapi contiene la cadena `</script>`, el navegador cierra prematuramente el tag y puede ejecutar HTML arbitrario que siga.

Ejemplo de payload malicioso en un campo `titulo` de Strapi:
```
Hola </script><script>alert(1)</script>
```

**Fix**:
```typescript
// frontend/src/lib/structured-data.ts — agregar helper
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/<\//g, '<\\/');
}

// Uso en pages:
dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
```

---

### SEC-04 — Token Bearer con doble espacio

**File**: `frontend/src/services/restclient/index.ts:51,129,170`

```typescript
Authorization: `Bearer  ${token}`,  // dos espacios
```

El header `Authorization` tiene un espacio extra entre `Bearer` y el token. RFC 6750 define un solo espacio. Algunos reverse proxies y WAFs (Cloudflare, Railway) rechazan o reescriben headers malformados. Esto puede causar fallos de autenticación silenciosos y dificultar el debugging.

**Fix**:
```typescript
Authorization: `Bearer ${token}`,
```

---

### SEC-05 — Sin `maxLength` en campos de texto libre del backend

**Files**: `backend/src/api/mensaje-contacto/content-types/mensaje-contacto/schema.json`, `backend/src/api/cita/content-types/cita/schema.json`

El campo `mensaje` es `type: text` y `nombre`, `asunto`, `telefono` son `type: string`, todos sin límite de longitud. Strapi no pone un límite por defecto. Un atacante puede enviar payloads de varios MB por request.

**Fix** — Agregar validaciones en el schema:
```json
"nombre":  { "type": "string", "required": true, "maxLength": 100 },
"asunto":  { "type": "string", "required": true, "maxLength": 200 },
"mensaje": { "type": "text",   "required": true, "maxLength": 2000 },
"telefono":{ "type": "string",                   "maxLength": 20  }
```

---

## 🟢 Minor

### SEC-06 — `console.error` expone rutas internas con el token en logs de Railway

**Files**:
- `frontend/src/app/productos/page.tsx:61`
- `frontend/src/app/productos/[slug]/page.tsx:76`

```typescript
console.error('Error loading product:', error);
```

El objeto `error` incluye el mensaje construido en `ApiError`:
```
"${error.message} - ${requestPath}"  // restclient/index.ts:73
```

`requestPath` contiene la URL completa de Strapi incluyendo parámetros. En Railway, los logs son accesibles por todos los miembros del equipo. Si el token está en un query param o en el mensaje de error de Strapi, queda expuesto en logs.

**Fix**:
```typescript
// Loguear solo el mensaje, nunca el objeto error completo
console.error('Error loading product:', error instanceof Error ? error.message : 'Unknown error');
```

---

### SEC-07 — CSP sin `frame-ancestors` explícito

**File**: `backend/config/middlewares.ts:5-33`

`strapi::security` con `useDefaults: true` activa `X-Frame-Options: SAMEORIGIN`, pero no agrega `frame-ancestors` en la CSP. Si el admin de Strapi queda expuesto en staging sin autenticación robusta, puede ser embebido en un iframe para ataques de clickjacking contra usuarios autenticados.

**Fix** — Agregar a las directivas CSP existentes:
```typescript
directives: {
  // ...existentes...
  'frame-ancestors': ["'none'"],
  upgradeInsecureRequests: null,
},
```

---

### SEC-08 — Inconsistencia de dominio en fallbacks

**Files**:
- `frontend/src/app/robots.ts:4` — fallback: `https://elisahorta.com`
- `frontend/src/app/sitemap.ts:8` — fallback: `https://elisahorta.com`
- `frontend/src/lib/structured-data.ts:4` — fallback: `https://evokare.com`

Tres archivos usan fallbacks distintos para `NEXT_PUBLIC_SITE_URL`. Si la variable no está configurada en un entorno (staging, PR preview), el sitemap y el schema de datos estructurados apuntan a dominios diferentes. Google indexa ambos como canónicos distintos.

**Fix** — Unificar el fallback al dominio de producción real en los tres archivos:
```typescript
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://elisahorta.com';
```

---

## React / Next.js Specific

### SEC-RX-01 — `useEffect` para navegación post-submit en `AgendarForm`

**File**: `frontend/src/components/agendar/AgendarForm.tsx:80-88`

```typescript
useEffect(() => {
  if (status === 'success') {
    const t = setTimeout(() => {
      router.push('/agendar');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
    return () => clearTimeout(t);
  }
}, [status, router]);
```

Este Effect reacciona a un cambio de estado del propio componente — exactamente el patrón que React Best Practices define como "Effect innecesario". La navegación es consecuencia directa de un evento de usuario (submit exitoso), no de sincronización con un sistema externo.

No es una vulnerabilidad de seguridad, pero sí un problema de correctness: en Strict Mode (desarrollo) el Effect se ejecuta dos veces, lo que puede disparar `router.push` dos veces.

**Fix**:
```typescript
// Mover la lógica de navegación directamente al onSubmit
onSubmit: async (values) => {
  setStatus('submitting');
  try {
    await submitCita(values);
    setStatus('success');
    // La navegación es consecuencia del submit, no de un efecto externo
    setTimeout(() => {
      router.push('/agendar');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  } catch {
    setStatus('error');
  }
},
```

---

## OWASP Top 10 — Checklist de estado actual

| # | Riesgo | Estado | Referencia |
|---|--------|--------|------------|
| A01 | Broken Access Control | ⚠️ Parcial | SEC-01: CORS abierto |
| A02 | Cryptographic Failures | ✅ OK | HTTPS en prod, secrets en env vars |
| A03 | Injection | ✅ OK | Strapi ORM, Yup/Formik en frontend |
| A04 | Insecure Design | ⚠️ Parcial | SEC-02: sin rate limiting |
| A05 | Security Misconfiguration | ⚠️ Parcial | SEC-01, SEC-07 |
| A06 | Vulnerable Components | ❓ Pendiente | Correr `npm audit` en ambos proyectos |
| A07 | Authentication Failures | ✅ OK | JWT de Strapi, token server-side only |
| A08 | Data Integrity Failures | ⚠️ Parcial | SEC-03: JSON-LD sin escape |
| A09 | Logging Failures | ⚠️ Parcial | SEC-06: logs exponen rutas |
| A10 | SSRF | ✅ OK | No hay fetch a URLs controladas por usuario |

---

## Priorización de implementación

| Orden | Issue | Esfuerzo | Impacto |
|-------|-------|----------|---------|
| 1 | SEC-01 — CORS | Bajo (5 min) | Alto |
| 2 | SEC-03 — JSON-LD escape | Bajo (10 min) | Alto |
| 3 | SEC-04 — Bearer doble espacio | Mínimo (1 min) | Medio |
| 4 | SEC-08 — Fallback dominio | Mínimo (5 min) | Medio |
| 5 | SEC-05 — maxLength schemas | Bajo (15 min) | Medio |
| 6 | SEC-07 — CSP frame-ancestors | Bajo (5 min) | Medio |
| 7 | SEC-02 — Rate limiting | Medio (1-2h) | Alto |
| 8 | SEC-06 — console.error | Bajo (10 min) | Bajo |
| 9 | SEC-RX-01 — Effect navegación | Bajo (10 min) | Bajo |
