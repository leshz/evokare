# Evokare 🛍️

Plataforma de ecommerce moderna para Evokare - Actualmente en desarrollo (WIP).

## 🚀 Tecnologías

### Backend
- **Strapi CMS 5.16.0** - Headless CMS para gestión de contenido
- **TypeScript** - Tipado estático
- **PostgreSQL** - Base de datos principal
- **SQLite** - Base de datos para desarrollo
- **MercadoPago** - Integración de pagos

### Frontend
- **Next.js 15.3.4** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework de CSS utilitario
- **ESLint + Prettier** - Linting y formateo de código

## 📋 Prerrequisitos

- Node.js >= 22.x
- Yarn o npm
- PostgreSQL (para producción)

## 🛠️ Instalación y Configuración

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/evokare.git
cd evokare
```

### Configurar Backend (Strapi)
```bash
cd backend
yarn install
yarn develop
```

El panel de administración de Strapi estará disponible en `http://localhost:1337/admin`

### Configurar Frontend (Next.js)
```bash
cd frontend
yarn install
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🚀 Scripts Disponibles

### Backend
- `yarn develop` - Inicia Strapi en modo desarrollo
- `yarn build` - Construye la aplicación para producción
- `yarn start` - Inicia Strapi en modo producción
- `yarn strapi` - CLI de Strapi

### Frontend
- `yarn dev` - Inicia Next.js en modo desarrollo (con Turbopack)
- `yarn build` - Construye la aplicación para producción
- `yarn start` - Inicia la aplicación en modo producción
- `yarn lint` - Ejecuta ESLint

## 📁 Estructura del Proyecto

```
evokare/
├── backend/           # API y CMS (Strapi)
│   ├── config/        # Configuraciones
│   ├── database/      # Migraciones
│   ├── src/          # Código fuente
│   └── types/        # Tipos TypeScript generados
├── frontend/         # Aplicación web (Next.js)
│   ├── src/
│   │   ├── app/      # App Router de Next.js
│   │   └── components/ # Componentes React
│   └── public/       # Archivos estáticos
└── readme.md
```

## 🌟 Características

- **Interfaz moderna y responsive** con Tailwind CSS
- **Gestión avanzada de contenido** con Strapi CMS
- **Sistema de pagos integrado** con MercadoPago
- **Catálogo de productos dinámico**
- **Tipado estático** con TypeScript en todo el stack
- **Optimización automática** con Next.js
- **Hot reload** para desarrollo rápido

## 🔧 Variables de Entorno

### Backend
Crear un archivo `.env` en la carpeta `backend/`:
```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/evokare
JWT_SECRET=tu-jwt-secret
ADMIN_JWT_SECRET=tu-admin-jwt-secret
```

### Frontend
Crear un archivo `.env.local` en la carpeta `frontend/`:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 🚀 Despliegue

### Backend (Strapi)
```bash
cd backend
yarn build
yarn start
```

### Frontend (Next.js)
```bash
cd frontend
yarn build
yarn start
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y confidencial.

## 👥 Equipo

Desarrollado con ❤️ shzTech.dev

---

> **Nota**: Este README está en constante actualización. Para más información sobre el desarrollo, consulta la documentación específica en las carpetas `backend/` y `frontend/`.
