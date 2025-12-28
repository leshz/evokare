# Plan de Implementación: Zustand para Carrito de Compras

## 📋 Resumen Ejecutivo

Implementar Zustand como solución de state management para el carrito de compras de Evokare, reemplazando el estado local aislado del componente `ShoppingCart` por un store global con persistencia en localStorage.

**Configuración seleccionada:**
- ✅ Persistencia: localStorage únicamente
- ✅ Funcionalidad: Operaciones básicas de carrito
- ✅ Sin autenticación (por ahora)
- ✅ Compatible con productos mock (en proceso de migración a Strapi)

---

## 🎯 Objetivos

1. Instalar y configurar Zustand con TypeScript
2. Crear store global del carrito con persistencia automática
3. Refactorizar componentes para usar el store
4. Implementar funcionalidad "Agregar al Carrito" actualmente inactiva
5. Manejar variantes de productos (colores)
6. Diseñar arquitectura extensible para futura integración con Strapi

---

## ✅ Checklist de Implementación

### Fase 1: Configuración Inicial
- [ ] Instalar Zustand: `yarn add zustand`
- [ ] Crear estructura de carpetas `/src/store/` y `/src/types/`
- [ ] Verificar instalación y versión

### Fase 2: Definición de Tipos
- [ ] Crear `/src/types/product.ts` con interfaz `Product` centralizada
- [ ] Crear `/src/store/types.ts` con interfaces:
  - [ ] `CartItem` (extendido con campos adicionales)
  - [ ] `CartState`
  - [ ] `CartActions`
- [ ] Actualizar imports de `Product` en:
  - [ ] `ProductInfo.tsx` (eliminar definición local línea 5-25)
  - [ ] `ProductCard.tsx` (eliminar definición local línea 4-17)
  - [ ] Archivos de páginas que usan productos

### Fase 3: Implementación del Store
- [ ] Crear `/src/store/cart-store.ts`
- [ ] Implementar estado inicial: `items: []`, `isOpen: false`
- [ ] Implementar acciones:
  - [ ] `addItem(product, quantity?, colorIndex?)` - con lógica de duplicados
  - [ ] `removeItem(id, colorIndex?)` - considerando variantes
  - [ ] `updateQuantity(id, quantity, colorIndex?)` - validar cantidad > 0
  - [ ] `clearCart()` - vaciar carrito completo
  - [ ] `setIsOpen(boolean)` - controlar visibilidad del drawer
  - [ ] `toggleCart()` - alternar visibilidad
- [ ] Implementar selectores:
  - [ ] `selectTotalPrice` - suma total del carrito
  - [ ] `selectTotalItems` - cantidad total de items
- [ ] Configurar middleware `persist`:
  - [ ] Key: `'evokare-cart-storage'`
  - [ ] Storage: `localStorage`
  - [ ] Partialize: solo persistir `items` (no `isOpen`)
  - [ ] Error handling en `onRehydrateStorage`
- [ ] Crear `/src/store/index.ts` para barrel exports

### Fase 4: Refactorizar ShoppingCart Component
**Archivo:** `/src/components/products/ShoppingCart.tsx`

- [ ] Importar `useCartStore` y selectores
- [ ] Eliminar `useState` de líneas 15-16:
  - [ ] `const [isOpen, setIsOpen]` → Zustand
  - [ ] `const [cartItems, setCartItems]` → Zustand
- [ ] Reemplazar funciones locales con acciones del store:
  - [ ] `toggleCart()` → `useCartStore(state => state.toggleCart)`
  - [ ] `removeFromCart(id)` → `removeItem(id)`
  - [ ] `updateQuantity(id, qty)` → `updateQuantity(id, qty)`
  - [ ] `getTotalPrice()` → `useCartStore(selectTotalPrice)`
  - [ ] `getTotalItems()` → `useCartStore(selectTotalItems)`
- [ ] Agregar estado de hidratación para evitar SSR mismatch:
  - [ ] `const [isHydrated, setIsHydrated] = useState(false)`
  - [ ] `useEffect` para setear hidratación
  - [ ] Condicional en badge de cantidad (línea 67-71)
- [ ] Actualizar referencias de `cartItems` a `items`
- [ ] Probar apertura/cierre del carrito

### Fase 5: Conectar ProductCard (Listado)
**Archivo:** `/src/components/products/ProductCard.tsx`

- [ ] Marcar componente como `'use client'`
- [ ] Importar `useCartStore`
- [ ] Extraer acciones: `const { addItem, setIsOpen } = useCartStore()`
- [ ] Crear `handleAddToCart`:
  - [ ] `e.preventDefault()` - evitar navegación del Link
  - [ ] `e.stopPropagation()` - evitar propagación
  - [ ] `addItem(producto, 1)` - agregar con cantidad 1
  - [ ] `setIsOpen(true)` - abrir carrito para feedback visual
- [ ] Conectar botón "Agregar" (línea 81) al handler
- [ ] Probar desde página `/productos`

### Fase 6: Conectar ProductInfo (Detalle)
**Archivo:** `/src/components/product-overview/ProductInfo.tsx`

- [ ] Importar `useCartStore`
- [ ] Extraer acciones: `const { addItem, setIsOpen } = useCartStore()`
- [ ] Mantener estado local UI (NO migrar a Zustand):
  - [ ] `quantity` - cantidad seleccionada (línea 32)
  - [ ] `selectedColor` - color seleccionado (línea 33)
  - [ ] `activeTab` - tab activa (línea 34)
- [ ] Actualizar `handleAddToCart()` (líneas 44-49):
  - [ ] Llamar `addItem(product, quantity, selectedColor)`
  - [ ] Llamar `setIsOpen(true)` para mostrar confirmación
  - [ ] Resetear `setQuantity(1)` después de agregar
- [ ] Probar desde página `/productos/[id]`

### Fase 7: Testing Manual Completo
- [ ] **Test: Agregar desde listado**
  - [ ] Click en "Agregar" en ProductCard
  - [ ] Verificar que carrito se abre automáticamente
  - [ ] Verificar item aparece en carrito con cantidad 1
  - [ ] Verificar badge muestra "1"
- [ ] **Test: Agregar desde detalle**
  - [ ] Seleccionar color específico
  - [ ] Ajustar cantidad a 3
  - [ ] Click "Agregar al Carrito"
  - [ ] Verificar item con color y cantidad correctos
- [ ] **Test: Variantes de color**
  - [ ] Agregar mismo producto con color A
  - [ ] Agregar mismo producto con color B
  - [ ] Verificar aparecen como 2 items separados
- [ ] **Test: Incrementar cantidad existente**
  - [ ] Agregar producto con color A (qty: 2)
  - [ ] Volver a agregar mismo producto con color A (qty: 3)
  - [ ] Verificar cantidad final = 5 (no reemplazo)
- [ ] **Test: Modificar cantidad en carrito**
  - [ ] Click botones +/- en ShoppingCart
  - [ ] Verificar actualización inmediata
  - [ ] Verificar total se recalcula
- [ ] **Test: Eliminar items**
  - [ ] Click icono de basura
  - [ ] Verificar item se elimina
  - [ ] Verificar badge actualiza
  - [ ] Eliminar último item → verificar mensaje "carrito vacío"
- [ ] **Test: Persistencia**
  - [ ] Agregar varios items
  - [ ] Refrescar página (F5)
  - [ ] Verificar items persisten
  - [ ] Verificar `isOpen` NO persiste (carrito cerrado)
- [ ] **Test: Total y cálculos**
  - [ ] Verificar precio total = suma(precio × cantidad)
  - [ ] Verificar badge = suma(cantidades)
  - [ ] Probar con productos con descuento (originalPrice)
- [ ] **Test: Navegación entre páginas**
  - [ ] Agregar item en `/productos`
  - [ ] Navegar a `/productos/1`
  - [ ] Verificar carrito mantiene items
  - [ ] Agregar otro item
  - [ ] Volver a `/productos`
  - [ ] Verificar ambos items presentes
- [ ] **Test: localStorage**
  - [ ] Abrir DevTools → Application → Local Storage
  - [ ] Verificar key `evokare-cart-storage` existe
  - [ ] Verificar estructura JSON correcta
  - [ ] Borrar manualmente el storage
  - [ ] Refrescar → verificar carrito vacío sin errores

### Fase 8: Casos Edge y Validaciones
- [ ] **Producto sin stock:**
  - [ ] Agregar validación `if (!product.inStock)` antes de `addItem`
  - [ ] Mostrar mensaje o deshabilitar botón
- [ ] **LocalStorage lleno:**
  - [ ] Probar comportamiento cuando quota excede
  - [ ] Verificar error se captura en console
  - [ ] Verificar app continúa funcionando (solo pierde persistencia)
- [ ] **Datos corruptos:**
  - [ ] Manualmente editar localStorage con JSON inválido
  - [ ] Refrescar página
  - [ ] Verificar Zustand resetea a estado inicial sin crash
- [ ] **Cantidad cero:**
  - [ ] Llamar `updateQuantity(id, 0)`
  - [ ] Verificar item se elimina automáticamente

### Fase 9: Documentación
- [ ] Agregar JSDoc a funciones del store
- [ ] Documentar interfaz `CartItem` con comentarios
- [ ] Actualizar esta documentación con:
  - [ ] Guía de uso del store
  - [ ] Ejemplos de código
  - [ ] Estructura del state
  - [ ] Migración futura a Strapi

### Fase 10: Mejoras Opcionales (Bonus)
- [ ] Toast notification al agregar item
- [ ] Animación de entrada de items en carrito
- [ ] Auto-cierre del carrito después de 2 segundos
- [ ] Shortcut ESC para cerrar carrito
- [ ] Confirmación antes de `clearCart()`
- [ ] Analytics tracking (`addItem`, `removeItem`, `checkout`)

---

## 📁 Archivos a Crear

### Nuevos Archivos
1. **`/src/types/product.ts`**
   - Interfaz `Product` centralizada
   - Elimina duplicación en ProductInfo y ProductCard

2. **`/src/store/types.ts`**
   - `CartItem` interface (extendido)
   - `CartState` interface
   - `CartActions` interface

3. **`/src/store/cart-store.ts`**
   - Store principal de Zustand
   - Configuración de persist middleware
   - Todas las acciones y selectores

4. **`/src/store/index.ts`**
   - Barrel exports para imports limpios

---

## 🔧 Archivos a Modificar

### Componentes Principales
1. **`/src/components/products/ShoppingCart.tsx`**
   - Migrar de useState a Zustand
   - ~45 líneas afectadas

2. **`/src/components/products/ProductCard.tsx`**
   - Agregar `'use client'`
   - Implementar `handleAddToCart`
   - ~15 líneas nuevas

3. **`/src/components/product-overview/ProductInfo.tsx`**
   - Conectar botón a store
   - ~10 líneas modificadas

---

## 🎨 Arquitectura del Store

```typescript
// Estructura del State
{
  items: CartItem[],      // Array de items en carrito
  isOpen: boolean         // Estado del drawer (NO persiste)
}

// Estructura de CartItem
{
  id: number,
  name: string,
  price: number,
  quantity: number,
  image: string,
  selectedColor?: string,     // Hex color seleccionado
  colorIndex?: number,        // Índice del color (para identificar variantes)
  category: string,
  inStock: boolean,
  originalPrice?: number,
  isTherapyProduct?: boolean,
  duration?: string,
  addedAt: number            // Timestamp de creación
}
```

---

## 🔄 Flujo de Datos

### Agregar desde Listado
```
User click "Agregar"
  → ProductCard.handleAddToCart(e)
  → e.preventDefault()
  → addItem(producto, 1)
  → Store: check if exists
    → No: crear nuevo CartItem
    → Sí: incrementar quantity
  → persist → localStorage
  → setIsOpen(true)
  → UI actualiza
```

### Agregar desde Detalle
```
User selecciona color → selectedColor state
User ajusta cantidad → quantity state
User click "Agregar al Carrito"
  → ProductInfo.handleAddToCart()
  → addItem(product, quantity, selectedColor)
  → Store: buscar item con mismo id + colorIndex
    → No: crear nuevo CartItem con color específico
    → Sí: quantity += nuevaCantidad
  → persist → localStorage
  → setIsOpen(true)
  → setQuantity(1) - reset UI
```

---

## 🔮 Preparación para Futura Integración Strapi

### Cambios Necesarios Más Adelante
1. **Agregar campo al state:**
   ```typescript
   isSyncing: boolean  // Estado de sincronización
   ```

2. **Convertir acciones a async:**
   ```typescript
   addItem: async (product, quantity, colorIndex) => {
     // Actualización optimista
     set(state => ({ items: [...state.items, newItem] }))

     // Sync a backend
     try {
       await syncCartToBackend(get().items)
     } catch (error) {
       // Manejar error, el carrito sigue funcionando local
     }
   }
   ```

3. **Crear servicio API:**
   ```typescript
   // /src/services/cart-api.ts
   export async function syncCartToBackend(items: CartItem[]): Promise<void>
   export async function fetchCartFromBackend(): Promise<CartItem[]>
   ```

**Ventaja:** Los componentes NO necesitarán cambios, solo el store internamente.

---

## 🚨 Puntos de Atención

1. **Hidratación SSR:** Usar flag `isHydrated` para evitar mismatch entre servidor y cliente
2. **Identidad de items:** Items con diferentes colores = items diferentes (usar `${id}-${colorIndex}`)
3. **Persistencia parcial:** Solo `items` se persiste, `isOpen` siempre inicia en `false`
4. **Cantidades aditivas:** Agregar 2 veces el mismo item suma cantidades, no reemplaza
5. **Productos mock vs Strapi:** Por ahora usar productos hardcoded, el store es agnóstico a la fuente

---

## ⏱️ Estimación de Tiempo

| Fase | Tiempo Estimado |
|------|----------------|
| Fase 1-2: Setup y tipos | 30 min |
| Fase 3: Store implementation | 45 min |
| Fase 4: ShoppingCart refactor | 30 min |
| Fase 5-6: ProductCard + ProductInfo | 45 min |
| Fase 7-8: Testing | 60 min |
| Fase 9-10: Docs y mejoras | 30 min |
| **TOTAL** | **~4 horas** |

---

## ✨ Resultado Final Esperado

Al completar esta implementación:

✅ Carrito funcional con estado global persistente
✅ Botones "Agregar" completamente operativos
✅ Variantes de color manejadas correctamente
✅ Persistencia automática en localStorage
✅ Feedback visual al agregar items
✅ Cálculos de totales en tiempo real
✅ Arquitectura lista para integración con Strapi
✅ Código type-safe con TypeScript
✅ Sin duplicación de interfaces Product

---

## 📚 Referencias

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Persist Middleware](https://github.com/pmndrs/zustand#persist-middleware)
- [Next.js 15 Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

---

**Última actualización:** 2025-12-27
**Versión del plan:** 1.0
