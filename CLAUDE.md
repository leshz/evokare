# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Evokare** is a modern e-commerce platform for mental health and wellness services. It's a full-stack monorepo application with:
- **Backend**: Strapi 5.52.1 headless CMS for content management
- **Frontend**: Next.js 16.3.0 with App Router for the user-facing application
- **Language**: TypeScript throughout
- **Primary Market**: Spanish-speaking users (content in Spanish)

## Repository Structure

```
evokare/
├── backend/          # Strapi CMS
├── frontend/         # Next.js application
├── CLAUDE.md         # This file
├── README.md         # Project documentation (Spanish)
└── .gitignore        # Git ignore rules
```

---

## Backend (Strapi CMS)

### Technology Stack
- **Framework**: Strapi 5.52.1 (Headless CMS)
- **Language**: TypeScript
- **Runtime**: Node.js v22
- **Database**:
  - Development: SQLite (`.tmp/data.db`)
  - Production: PostgreSQL
- **File Storage**: Cloudflare R2 (`strapi-provider-cloudflare-r2`)
- **Email**: Resend (`strapi-provider-email-resend`)
- **Payment Integration**: MercadoPago (own fork, see Plugins)

### Directory Structure

```
backend/
├── config/              # Configuration files
│   ├── admin.ts         # Admin panel settings
│   ├── api.ts           # API limits and settings
│   ├── database.ts      # Database configuration
│   ├── middlewares.ts   # Middleware stack and CORS
│   ├── plugins.ts       # Plugin configuration
│   └── server.ts        # Server settings
├── database/
│   └── migrations/      # Database migrations
├── docker/
│   └── docker-compose.yml  # PostgreSQL container
├── public/
│   └── uploads/         # File uploads (local dev)
├── src/
│   ├── api/             # API endpoints (9 content-types)
│   │   ├── acerca/      # About page content (single)
│   │   ├── blog/        # Blog posts (collection)
│   │   ├── cita/        # Appointment requests (collection, public POST)
│   │   ├── contacto/    # Contact page content (single)
│   │   ├── etiqueta/    # Tags/labels (collection)
│   │   ├── general/     # Global content (header, footer, nav) (single)
│   │   ├── inicio/      # Homepage content (single)
│   │   ├── mensaje-contacto/  # Contact messages (collection, public POST)
│   │   └── producto/    # Products PAGE content (single, not the catalog)
│   ├── admin/           # Admin customizations
│   ├── components/      # Reusable Strapi components (6 namespaces)
│   │   ├── contacto/    # Contact page components
│   │   ├── general/     # Layout components
│   │   ├── inicio/      # Homepage sections
│   │   ├── nosotros/    # About page sections
│   │   ├── productos/   # Products page sections
│   │   └── shared/      # Shared components (SEO, banners, etc.)
│   ├── extensions/      # Plugin extensions
│   ├── plugins/         # Local plugin sources
│   └── index.ts         # Bootstrap file
├── scripts/
│   ├── seed-content.ts  # Seed runner (`yarn seed`)
│   └── seed-data/       # Seed payloads (acerca, general, inicio)
└── types/
    └── generated/       # Auto-generated TypeScript types
```

### Key Configuration

#### Plugins (`config/plugins.ts`)
- **MercadoPago** (`strapi-mercadopago`) — enabled. Installed from an **own fork**
  (`github.com/leshz/mercadopago-strapi#main`). In this working copy it resolves
  through a symlink to a local checkout, so plugin changes are made in that repo,
  not here. Declares the product catalog content-types — see *Product catalog* below.
- **SEO** (`@strapi-community/plugin-seo` 2.x) — enabled. Note the `@strapi-community`
  scope; it is not the old `@strapi/plugin-seo`.
- **Populate-All** (`strapi-plugin-populate-all`) — automatic relation population
- **Advanced UUID** (`strapi-advanced-uuid`)
- **Responsive images** (`strapi-5-plugin-responsive-backend`)
- **Upload → Cloudflare R2** (`strapi-provider-cloudflare-r2`):
  - `CF_ACCESS_KEY_ID`
  - `CF_SECRET_ACCESS_KEY`
  - `CF_ENDPOINT`
  - `CF_BUCKET`
  - `CF_PUBLIC_URL`
- **Email → Resend** (`strapi-provider-email-resend`):
  - `RESEND_API_KEY`
  - `EMAIL_FROM`, `EMAIL_REPLY_TO` (defaults fall back to `onboarding@resend.dev`)
  - `EMAIL_TO` — recipient of the form notifications (see *Public form endpoints*)

#### Database (`config/database.ts`)
- Supports: SQLite (dev), MySQL, PostgreSQL (production)
- Connection pooling configured
- SSL support with customizable options
- Uses `DATABASE_URL` environment variable for production

#### Middlewares (`config/middlewares.ts`)
- Standard Strapi middleware stack
- CSP `img-src` / `media-src` are built **dynamically** from `CF_PUBLIC_URL`
  (the scheme is stripped at runtime). There is no hardcoded bucket host — if
  images stop loading, check that `CF_PUBLIC_URL` is set, not the middleware.
- CORS enabled (configurable via environment)

#### API Configuration (`config/api.ts`)
- REST API limits: default 25, max 100
- Count enabled for collections

### Content Types

Nine content-types live under `src/api/`. The product **catalog** is not among
them — it is declared by the MercadoPago plugin (see *Product catalog*).

**Single Types** (one instance per locale):

| Type | Fields |
|------|--------|
| `api::inicio.inicio` | `secciones` (dynamic zone), `seo` |
| `api::acerca.acerca` | `secciones` (dynamic zone), `seo` |
| `api::general.general` | `navegacion`, `pie_de_pagina` (**required**), `menu` (dynamic zone of `shared.accion`), `seo` |
| `api::contacto.contacto` | `titulo`, `subtitulo`, `informacion_contacto` (blocks), `redes_sociales` (`contacto.red-social`), `mapa` (bool), `latitud`/`longitud` (decimal), `seo` |
| `api::producto.producto` | `secciones` (dynamic zone), `seo` — **static page content only** |

**Collection Types**:

| Type | Fields |
|------|--------|
| `api::blog.blog` | `titulo`*, `articulo`* (blocks), `introduccion`, `slug` (uid), `media`, `etiquetas` (→ `etiqueta`), `seo` |
| `api::etiqueta.etiqueta` | `nombre`*, `slug` (uid), `blogs` (→ `blog`) |
| `api::cita.cita` | `nombre`*, `correo`* (email), `telefono`*, `modalidad`* (`virtual` \| `presencial`), `dia`* (`lunes`…`sabado`) |
| `api::mensaje-contacto.mensaje-contacto` | `email`*, `asunto`*, `mensaje`*, `nombre`, `telefono` |

`*` = required.

#### Dynamic zones (exact component lists)

Adding a component to a zone here is what makes it available in the CMS. The
frontend must have a matching entry in its component factory or it renders nothing.

- **`inicio.secciones`**: `inicio.acerca`, `inicio.entendiendo`, `inicio.apoyo`,
  `inicio.sistemaintegral`, `inicio.datos`, `inicio.hero`, `inicio.que-dicen`,
  `inicio.perspectivas`, `inicio.reflexiones`
- **`acerca.secciones`**: `nosotros.bio`, `nosotros.credenciales`, `nosotros.metodologias`
- **`producto.secciones`**: `inicio.entendiendo`, `productos.banner`, `productos.categorias`
- **`general.menu`**: `shared.accion`

> **`nosotros.certificaciones` exists as a component but is in NO dynamic zone.**
> It cannot be selected from the CMS as things stand. Either add it to
> `acerca.secciones` or treat it as dead. Do not assume it is reachable.

> There is **no `nosotros.hero` component** in this backend. If you see the
> frontend mapping one, that mapping has no counterpart here — see the frontend
> component-factory notes.

#### `GET /api/blogs/:id` resolves by SLUG

`src/api/blog/controllers/blog.ts` overrides `findOne`: the `:id` path parameter
is treated as a **slug** and looked up with `findFirst({ filters: { slug } })`.
Passing a numeric id returns `404 "Blog not Found"`. The route is the stock core
router — only the controller is custom, so this is easy to miss.

### Public form endpoints

Two collection types accept public `POST`s from the site forms (stock core routers):

| Endpoint | Required body |
|----------|---------------|
| `POST /api/citas` | `nombre`, `correo`, `telefono`, `modalidad` (`virtual`\|`presencial`), `dia` (`lunes`\|`martes`\|`miercoles`\|`jueves`\|`viernes`\|`sabado`) |
| `POST /api/mensaje-contactos` | `email`, `asunto`, `mensaje` (optional: `nombre`, `telefono`) |

> **A `200` means "record saved", NOT "email sent".**
> Both types have an `afterCreate` lifecycle that emails `EMAIL_TO`. A send
> failure is caught and only logged (`strapi.log.error`) — the request still
> succeeds, deliberately, so a broken mailer never loses a lead. Consequences:
> - If `EMAIL_TO` is unset, notification is skipped with a `warn` and nothing breaks.
> - Nobody is alerted when Resend fails. The record is in the CMS; the email is not.
> - Do not treat the HTTP status as delivery confirmation anywhere.

Lifecycles: `src/api/cita/content-types/cita/lifecycles.ts`,
`src/api/mensaje-contacto/content-types/mensaje-contacto/lifecycles.ts`.
The contact one escapes HTML in the message body (public unsanitized input);
keep that if you edit the template.

### Product catalog (MercadoPago plugin)

The catalog **is** a Strapi content-type — same Strapi, same database, same
content-api — but it is declared by the `strapi-mercadopago` plugin, not under
`src/api/`. Do not confuse it with the `api::producto.producto` single type,
which only holds the static page content.

Content-api routes exposed by the plugin (`server/src/routes/`):

- `GET /strapi-mercadopago/products` — list
- `GET /strapi-mercadopago/products/:slug` — **resolves by slug**, `404` if absent
- also: `categories`, `checkout`, `order`, `notification`, `configuration`, `dashboard`

`plugin::strapi-mercadopago.product` (collection, i18n localized):
`name`*, `price`* (integer), `pictures`* (media), `short_description`*,
`slug`* (uid), `stock`* (integer), `sku`*, `promotion`* (component),
`categories` (→ plugin category), `middle_description`, `information`.
`findOne` populates `pictures`, `categories`, `promotion`, `information` by default.

### Component Architecture

Strapi components are organized into groups:

- **`general/`** (5): `barra-de-navegacion`, `columna`, `derechos-de-autor`,
  `invitacion`, `pie-de-pagina`

- **`inicio/`** (13): `acerca`, `apoyo`, `banner`, `datos`, `destacados`,
  `entendiendo`, `hero`, `perspectivas`, `puntos`, `que-dicen`, `reflexiones`,
  `sistemaintegral`, `testimonios`
  (only 9 of these are in the `inicio.secciones` zone — see *Dynamic zones*)

- **`nosotros/`** (4): `bio`, `certificaciones`, `credenciales`, `metodologias`
  (`certificaciones` is in no dynamic zone — see the warning above.
  There is no `hero` here.)

- **`contacto/`** (1): `red-social`

- **`productos/`** (2): `banner`, `categorias`

- **`shared/`** (7): `accion`, `banner-comp`, `contenido`, `items`,
  `open-graph`, `perspectiva`, `seo`

### Development Commands

```bash
cd backend

# Development (Strapi only)
yarn develop

# Development (Docker + Strapi)
yarn dev              # Runs docker-compose + strapi develop concurrently

# Production
yarn build            # Build admin panel
yarn start            # Start production server

# CLI
yarn strapi           # Access Strapi CLI
yarn console          # Strapi REPL
yarn deploy           # strapi deploy

# Seeding
yarn seed             # Runs scripts/seed-content.ts (acerca, general, inicio)

# Upgrades
yarn upgrade          # Minor version upgrade
yarn upgrade:dry      # Dry run upgrade
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Server
HOST=0.0.0.0
PORT=1337

# Security (generate strong random strings)
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
JWT_SECRET=
ENCRYPTION_KEY=

# Cloudflare R2 (file storage)
CF_ACCESS_KEY_ID=
CF_SECRET_ACCESS_KEY=
CF_ENDPOINT=https://<ACCOUNT_ID>.r2.cloudflarestorage.com
CF_PUBLIC_URL=https://pub-<hash>.r2.dev
CF_BUCKET=

# Email (Resend) — cita / mensaje-contacto notifications
RESEND_API_KEY=
EMAIL_FROM=
EMAIL_REPLY_TO=
EMAIL_TO=

# Database (production)
DATABASE_URL=postgres://user:password@host:5432/dbname
```

`CF_PUBLIC_URL` also feeds the CSP in `config/middlewares.ts`; leaving it unset
breaks image loading in the admin panel. `EMAIL_TO` unset only disables the form
notifications (logged as a warning) — the records are still saved.

### Docker Development

Local PostgreSQL via Docker:
```bash
cd backend/docker
docker-compose up -d  # Start PostgreSQL
```

Database credentials (docker-compose.yml):
- Database: `evokare`
- User: `evokare`
- Password: `evokar123`
- Port: `5432`

### TypeScript Configuration

- Target: ES2019
- Module: CommonJS
- Strict: **false** (for Strapi compatibility)
- Excludes: admin, tests, plugins from server compilation
- Auto-generated types: `types/generated/`

---

## Frontend (Next.js)

### Technology Stack
- **Framework**: Next.js 16.3.0 with App Router
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS v4
- **State**: Zustand 5.0.10 (shopping cart, with `persist` middleware)
- **Forms**: Formik 2.4.9 + Yup 1.7.1 (validation schemas)
- **Icons**: Lucide React 0.525.0
- **Carousel**: Embla Carousel 8.6.0
- **Analytics**: `@next/third-parties` 16.3.0 (Google Analytics)
- **Strapi Integration**: `@strapi/blocks-react-renderer` 1.0.2

### Directory Structure

```
frontend/
├── .claude/
│   └── commands/        # Custom Claude Code commands
├── .husky/              # Git hooks
│   ├── pre-commit       # Runs linting
│   └── pre-push         # Runs lint + build
├── .vscode/             # VS Code settings
├── docs/
│   └── zustand.md       # Zustand plan (already implemented, see State Management)
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── acerca-de-mi/    # About page
│   │   ├── agendar/         # Appointment booking page
│   │   ├── blogs/           # Blog listing
│   │   │   └── [slug]/      # Dynamic blog post
│   │   ├── contacto/        # Contact page
│   │   ├── productos/       # Product catalog
│   │   │   └── [slug]/      # Dynamic product detail (SLUG, not id)
│   │   ├── tienda/
│   │   │   ├── checkout/    # Checkout flow
│   │   │   └── confirmacion/  # Order confirmation
│   │   ├── llms.txt/        # route.ts — llms.txt for AI crawlers
│   │   ├── manifest.ts      # PWA manifest
│   │   ├── robots.ts        # robots.txt
│   │   ├── sitemap.ts       # Dynamic sitemap
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/      # React components (domain-organized)
│   │   ├── about/       # About page components
│   │   ├── agendar/     # Appointment booking components
│   │   ├── blogs/       # Blog components
│   │   ├── checkout/    # Checkout components
│   │   ├── confirmation/  # Order confirmation components
│   │   ├── contact/     # Contact form components
│   │   ├── home/        # 10 homepage section components
│   │   ├── layout/      # Header, Footer
│   │   ├── product-overview/  # Product overview components
│   │   ├── products/    # Product list/detail components
│   │   └── shared/      # Shared UI components (Button, Card, SectionHeader…)
│   ├── constants/       # Constants
│   │   ├── index.ts            # STRAPI_API_PATHS, timeouts, pagination
│   │   ├── colombia-locations.ts  # Location data for forms
│   │   └── feature-flags.ts    # FEATURE_FLAGS (CART)
│   ├── helpers/         # Helper functions
│   │   ├── currency.ts      # Currency formatting
│   │   └── menu-mapping.ts  # Navigation menu mapping
│   ├── lib/             # Library code
│   │   ├── analytics.ts        # GA event tracking
│   │   ├── component-factory.tsx  # Dynamic component renderer
│   │   ├── site.ts             # Site-wide metadata config
│   │   ├── structured-data.ts  # JSON-LD schema builders
│   │   └── validations/
│   │       └── checkout-schema.ts  # Yup schema for checkout
│   ├── services/        # API services (server-side only)
│   │   ├── blogs/       # Blog API calls
│   │   ├── checkout/    # MercadoPago checkout
│   │   ├── citas/       # Appointment booking (POST)
│   │   ├── contacto/    # Contact page + message submission
│   │   ├── general/     # General content API (+ fallback.ts)
│   │   ├── inicio/      # Homepage content API
│   │   ├── nosotros/    # About content API
│   │   ├── productos/   # Static page content + MercadoPago catalog
│   │   ├── restclient/  # Core API client
│   │   └── seo/         # SEO data API
│   ├── store/           # Zustand stores
│   │   └── cart-store.ts   # Shopping cart (persisted)
│   └── types/           # TypeScript type definitions
└── [config files]       # See below
```

### Key Configuration Files

#### `next.config.ts`
- Images: unoptimized
- Remote patterns: Unsplash, Picsum
- TypeScript configuration integrated

#### `tsconfig.json`
- Target: ES2017
- Strict mode: **enabled**
- Path alias: `@/*` → `./src/*`
- Next.js plugin integrated

#### `eslint.config.mjs`
- Extends: `next/core-web-vitals`, `next/typescript`
- Custom: `@typescript-eslint/no-explicit-any` → warn

#### `postcss.config.mjs`
- Tailwind CSS v4 plugin: `@tailwindcss/postcss`

#### `.prettierrc`
```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

#### `globals.css` (Tailwind v4)
```css
@import "tailwindcss";

@theme inline {
  /* Custom CSS variables */
  --color-principal: #fbfcff;
  --color-secundario: #9f97f0;
  --color-terciario: #5893f7;

  /* Color palettes: indigo-50 to indigo-900, purple-50 to purple-900 */
  /* Font families: Montserrat (primary), Spectral (secondary) */
}
```

### Architecture Patterns

#### 1. Component Factory Pattern (`lib/component-factory.tsx`)

The component factory dynamically renders Strapi components based on their `__component` field:

```typescript
// Maps Strapi component types to React components
const componentMap = {
  'inicio.hero': HeroSection,
  'productos.banner': ProductsBanner,
  'shared.banner-comp': BannerComp,
  // ... 16 mappings total
}

// Usage in pages
export default async function HomePage() {
  const data = await getInicioData();
  return <ComponentFactory sections={data.sections} />;
}
```

**The 16 mapped component types** (must match the Strapi dynamic zones exactly):
- `inicio.*`: acerca, apoyo, datos, entendiendo, hero, perspectivas, que-dicen, reflexiones, sistemaintegral
- `nosotros.*`: bio, credenciales, hero*, metodologias
- `productos.*`: banner, categorias
- `shared.banner-comp`

**Key characteristics**:
- Extensive validation for each section
- Type-safe with TypeScript interfaces
- Fallback for unknown components

> Adding a section in Strapi requires adding its mapping here, or it renders nothing.

> \* `nosotros.hero` is a **dead mapping**: no `hero.json` exists under
> `backend/src/components/nosotros/`, and the `acerca` dynamic zone only accepts
> bio, credenciales and metodologias. Strapi can never emit it, so `AboutHero`
> on `/acerca-de-mi` always renders through its fallback path. This is not a bug
> to fix by creating the component in Strapi — the page works as intended.
> Verified against the backend schemas.

#### 2. Service Layer Architecture

All API calls go through a centralized service layer:

**Structure**:
```
services/
├── restclient/          # Core API client
│   ├── index.ts         # GET, POST, Collection methods
│   └── types.ts         # ApiError, Response types
├── blogs/
│   ├── index.ts         # getAllBlogs, getBlogBySlug
│   └── types.ts         # Blog type definitions
├── citas/               # index.ts + types.ts + schema.ts (Yup)
├── contacto/            # index.ts + types.ts + schema.ts + actions.ts
└── [other services]/
```

**REST Client** (`services/restclient/index.ts`):
- `import 'server-only'` — NOT `'use server'`. These are not server actions;
  the import makes the build FAIL if this module reaches a client component,
  so `STRAPI_API_TOKEN` can never leak into the browser bundle.
- Bearer token authentication via `process.env.STRAPI_API_TOKEN`
- Automatic `populate=all` for Strapi relations
- Timeout handling via `AbortController` (see `DEFAULT_TIMEOUT`)
- Custom `ApiError` class

**API paths** are centralized in `src/constants/index.ts` (`STRAPI_API_PATHS`) —
never hardcode a Strapi path in a service or component.

#### Product catalog (MercadoPago plugin)

Products are a Strapi content-type declared by the `strapi-mercadopago` plugin
rather than under `backend/src/api/`. Same Strapi, same database, same content-api
— the frontend never talks to the MercadoPago API directly. All access is
server-side through the REST client:

- `GET /strapi-mercadopago/products` — list (supports pagination and
  `filters[categories][slug][$eq]`; the frontend treats `'todos'` as "no filter")
- `GET /strapi-mercadopago/products/:slug` — **resolves by SLUG, not numeric id**
- `GET /strapi-mercadopago/categories`
- `POST /strapi-mercadopago/checkout`

Do not confuse this with the `producto` single type, which holds only the
*static* content of the products page (banner, categories section, SEO).

**Example usage**:
```typescript
import { getAllBlogs } from '@/services/blogs';

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  return <BlogList blogs={blogs} />;
}
```

#### 3. Type Safety Strategy

- **Services**: Separate `types.ts` for each service
- **Components**: Props interfaces defined inline or in types/
- **API responses**: Typed based on Strapi schema
- **Strict TypeScript**: Enabled in frontend

#### 4. Font Strategy

Fonts loaded via `next/font/google` in `app/layout.tsx`:

```typescript
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-primary'
});

const spectral = Spectral({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-secondary'
});
```

CSS variables:
- `--font-primary`: Montserrat
- `--font-secondary`: Spectral

### State Management

**Zustand 5** for the shopping cart — implemented in `src/store/cart-store.ts`.

- Persisted with the `persist` middleware (survives reloads)
- State: `items: CartItem[]`, `isOpen: boolean`
- Actions: `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `setIsOpen`, `toggleCart`
- Exported selectors (e.g. `selectTotalPrice`) — prefer them over deriving
  totals in components, so subscriptions stay narrow
- Emits analytics events via `src/lib/analytics.ts`

Everything else uses local component state (`useState`, `useEffect`). Pages are
server components by default; only interactive leaves are `'use client'`.

> `frontend/docs/zustand.md` is the original implementation *plan*, kept for
> historical context. The store is already built — read the code, not the plan.

### Feature Flags

`src/constants/feature-flags.ts` exposes `FEATURE_FLAGS`, read from
`NEXT_PUBLIC_*` env vars at build time:

- `CART` ← `NEXT_PUBLIC_FEATURE_CART` (cart/checkout flow, off unless `'true'`)

### Development Commands

```bash
cd frontend

# Development
yarn dev              # Next.js with Turbopack

# Production
yarn build            # Empties .next/cache, then next build
yarn start            # Start production server

# Quality
yarn lint             # Run ESLint (flat config, eslint .)

# Git hooks (automatic)
yarn prepare          # Setup Husky hooks
```

> `build` empties `.next/cache` **without deleting the directory**
> (`find .next/cache -mindepth 1 -delete`). Removing the directory itself breaks
> builds on some deploy targets — keep the `-mindepth 1`.

### Environment Variables

Create `.env.local` based on `.env.example`:

```env
# Strapi Backend
STRAPI_API_URL=tobechanged
STRAPI_API_TOKEN=tobechanged

# Site Configuration
NEXT_PUBLIC_SITE_URL=tobechanged
NEXT_PUBLIC_SITE_NAME=tobechanged
NEXT_PUBLIC_FEATURE_CART=false

# Third-party Services
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

`STRAPI_API_TOKEN` has no `NEXT_PUBLIC_` prefix by design — it is read only from
`server-only` modules and must never reach the browser.

### VS Code Configuration

**Settings** (`.vscode/settings.json`):
- Format on save: enabled
- Default formatter: Prettier
- ESLint fix on save: enabled
- Tailwind CSS IntelliSense: configured
- TypeScript import preferences: relative

**Recommended Extensions**:
- Peacock (workspace coloring)

---

## Development Workflows

### Starting Development

**Backend**:
```bash
cd backend
yarn dev              # Starts Docker PostgreSQL + Strapi
# OR
yarn develop          # Strapi only (uses SQLite)
```

Access Strapi admin: `http://localhost:1337/admin`

**Frontend**:
```bash
cd frontend
yarn dev              # Starts Next.js on http://localhost:3000
```

### Adding a New Page

1. **Backend (Strapi)**:
   - Create content type via Strapi admin UI
   - Configure permissions in Settings → Roles
   - Add content via Content Manager

2. **Frontend**:
   - Create route in `src/app/[page-name]/`
   - Create service in `src/services/[page-name]/`
   - Create components in `src/components/[page-name]/`
   - Update navigation in `src/helpers/menu-mapping.ts`

### Adding a New Component Section

1. **Backend**:
   - Create component in Strapi admin
   - Add to content type's dynamic zone

2. **Frontend**:
   - Create React component in appropriate directory
   - Add mapping in `lib/component-factory.tsx`
   - Define TypeScript types

### Git Workflow

**Pre-commit hooks** (`.husky/pre-commit`):
- Runs `npm lint` before each commit

**Pre-push hooks** (`.husky/pre-push`):
- Runs `npm lint`
- Runs `npm run build`
- Blocks push if either fails

**Branch naming**:
- Feature branches: `claude/[description]-[sessionId]`
- Main branch: (default)

---

## Code Conventions

### Naming Conventions

**Files**:
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Services: `index.ts` + `types.ts`
- Config: `kebab-case.ts` (e.g., `next.config.ts`)

**Variables/Functions**:
- Components: `PascalCase` (e.g., `HeroSection`)
- Functions: `camelCase` (e.g., `getAllBlogs`)
- Constants: `UPPER_SNAKE_CASE` or `camelCase`
- Types/Interfaces: `PascalCase` (e.g., `BlogPost`)

**Strapi**:
- API endpoints: `kebab-case` (e.g., `api::blog.blog`)
- Components: `namespace.component` (e.g., `inicio.hero`)

### Code Organization

**Frontend**:
- **Domain-driven**: Components organized by page/feature
- **Colocation**: Services have `index.ts` + `types.ts` together
- **Barrel exports**: Use `index.ts` for clean imports
- **Server components**: Default for pages (fetch data server-side)
- **'use client'**: Only when needed (interactivity, hooks)

**Backend**:
- **API-first**: Controllers expose REST endpoints
- **Single responsibility**: One controller per content type
- **Custom routes**: Define in `routes/` subdirectories
- **Services**: Business logic in services, not controllers

### TypeScript Patterns

**Frontend** (strict mode):
```typescript
// Explicit return types
export async function getAllBlogs(): Promise<Blog[]> {
  // ...
}

// Interface for props
interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

// No 'any' (warn level, but avoid)
```

**Backend** (relaxed mode):
```typescript
// Use Strapi's generated types
import type { Blog } from '@/types/generated/contentTypes';

// Controllers return Strapi context
async find(ctx) {
  const entries = await strapi.entityService.findMany(/* ... */);
  return entries;
}
```

### Styling Conventions

**Tailwind CSS**:
- Use utility classes (no inline styles)
- Custom colors via CSS variables
- Responsive design: mobile-first (`sm:`, `md:`, `lg:`)
- Dark mode: Not yet implemented

**CSS Variables** (globals.css):
- `--color-principal`: Primary color
- `--color-secundario`: Secondary color
- `--color-terciario`: Tertiary color
- `--font-primary`: Montserrat
- `--font-secondary`: Spectral

### API Communication Patterns

**Server Components** (preferred):
```typescript
// app/blogs/page.tsx
import { getAllBlogs } from '@/services/blogs';

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  return <BlogList blogs={blogs} />;
}
```

**Client Components** (when needed):
```typescript
'use client';

import { useState, useEffect } from 'react';

export default function InteractiveComponent() {
  const [data, setData] = useState(null);
  // ... client-side logic
}
```

**Service pattern**:
```typescript
// services/blogs/index.ts
'use server';

import { get } from '../restclient';
import type { Blog } from './types';

export async function getAllBlogs(): Promise<Blog[]> {
  return get<Blog[]>('/api/blogs');
}
```

---

## Testing

**Current status**: No testing framework configured

**Recommendations**:
- Unit tests: Vitest or Jest
- E2E tests: Playwright
- Component tests: React Testing Library

---

## Deployment

**Backend**:
- Build: `yarn build`
- Start: `yarn start`
- Database: PostgreSQL (via `DATABASE_URL`)
- File uploads: Cloudflare R2 (`CF_*` variables)
- Email: Resend (`RESEND_API_KEY`, `EMAIL_TO`)
- Port: 1337

**Frontend**:
- Build: `yarn build`
- Start: `yarn start`
- Environment: Set `STRAPI_API_URL` to production Strapi URL
- Port: 3000 (default)

---

## Troubleshooting

### Backend won't start
- Check database connection (PostgreSQL running?)
- Verify `.env` file has all required variables
- Run `yarn strapi version` to verify Strapi installation

### Frontend build fails
- Run `yarn lint` to check for errors
- Verify `STRAPI_API_URL` is accessible
- Check TypeScript errors with `tsc --noEmit`

### Images not loading
- Verify Cloudflare R2 credentials in backend `.env` (`CF_*`)
- `CF_PUBLIC_URL` must be set — the backend CSP is derived from it
- Check CSP configuration in `backend/config/middlewares.ts`
- Ensure remote patterns configured in `frontend/next.config.ts`

### Type errors in frontend
- Strapi types changed? Restart backend to regenerate types
- Check import paths use `@/` alias correctly
- Verify strict TypeScript mode is enabled

---

## Additional Resources

- **Strapi Documentation**: https://docs.strapi.io/
- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## Project Statistics

- **API Endpoints**: 9 under `src/api/` (acerca, blog, cita, contacto, etiqueta, general, inicio, mensaje-contacto, producto), plus the MercadoPago plugin routes
- **Component Groups**: 6 (contacto, general, inicio, nosotros, productos, shared)
- **Frontend Pages**: 8 routes (home, acerca-de-mi, agendar, blogs, contacto, productos, tienda/checkout, tienda/confirmacion) + 2 dynamic ([slug] for blogs and productos)
- **Homepage Sections**: 10 components
- **Component Factory Mappings**: 16
- **Service Modules**: 10 (blogs, checkout, citas, contacto, general, inicio, nosotros, productos, restclient, seo)
- **Node Version**: v22
- **Primary Language**: Spanish (content), English (code)

---

**Last Updated**: 2026-01-15
**Maintainer**: Evokare Development Team
**License**: Proprietary
