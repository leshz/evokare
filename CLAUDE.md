# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Evokare** is a modern e-commerce platform for mental health and wellness services. It's a full-stack monorepo application with:
- **Backend**: Strapi 5.31.0 headless CMS for content management
- **Frontend**: Next.js 16.1.1 with App Router for the user-facing application
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
- **Framework**: Strapi 5.31.0 (Headless CMS)
- **Language**: TypeScript
- **Runtime**: Node.js v22
- **Database**:
  - Development: SQLite (`.tmp/data.db`)
  - Production: PostgreSQL
- **File Storage**: AWS S3
- **Payment Integration**: MercadoPago

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
│   ├── api/             # API endpoints
│   │   ├── acerca/      # About page content
│   │   ├── blog/        # Blog posts
│   │   ├── etiqueta/    # Tags/labels
│   │   ├── general/     # Global content (header, footer, nav)
│   │   └── inicio/      # Homepage content
│   ├── admin/           # Admin customizations
│   ├── components/      # Reusable Strapi components
│   │   ├── general/     # Layout components
│   │   ├── inicio/      # Homepage sections
│   │   ├── nosotros/    # About page sections
│   │   └── shared/      # Shared components (SEO, banners, etc.)
│   ├── extensions/      # Plugin extensions
│   └── index.ts         # Bootstrap file
└── types/
    └── generated/       # Auto-generated TypeScript types
```

### Key Configuration

#### Plugins (`config/plugins.ts`)
- **MercadoPago**: Payment processing (`strapi-mercadopago`) - enabled
- **SEO**: Meta tags and optimization (`@strapi/plugin-seo`) - enabled
- **Populate-All**: Automatic relation population - enabled
- **AWS S3**: Upload provider with environment variables:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_ACCESS_SECRET`
  - `AWS_REGION`
  - `AWS_BUCKET`

#### Database (`config/database.ts`)
- Supports: SQLite (dev), MySQL, PostgreSQL (production)
- Connection pooling configured
- SSL support with customizable options
- Uses `DATABASE_URL` environment variable for production

#### Middlewares (`config/middlewares.ts`)
- Standard Strapi middleware stack
- Custom CSP for S3 bucket: `eli-website-develop.s3.us-west-2.amazonaws.com`
- CORS enabled (configurable via environment)

#### API Configuration (`config/api.ts`)
- REST API limits: default 25, max 100
- Count enabled for collections

### Content Types

**Single Types** (one instance per locale):
- `api::inicio.inicio` - Homepage content with dynamic zones
- `api::acerca.acerca` - About page content
- `api::general.general` - Global content (header, footer, navigation)

**Collection Types** (multiple instances):
- `api::blog.blog` - Blog posts with slug-based routing
- `api::etiqueta.etiqueta` - Tags/categories

### Component Architecture

Strapi components are organized into groups:

- **`general/`**: Layout components
  - `barra-de-navegacion` - Navigation bar items
  - `pie-de-pagina` - Footer sections
  - `derechos-de-autor` - Copyright info
  - `columna` - Column layouts

- **`inicio/`**: Homepage sections
  - `hero` - Hero section
  - `banner` - Banner sections
  - `apoyo` - Support section
  - `sistemaintegral` - Integral system section
  - `datos` - Data/statistics section
  - And more...

- **`nosotros/`**: About page sections
  - `bio` - Biography
  - `certificaciones` - Certifications
  - `credenciales` - Credentials
  - `metodologias` - Methodologies

- **`shared/`**: Reusable components
  - `seo` - SEO metadata
  - `banner-comp` - Reusable banners
  - `accion` - Call-to-action
  - `contenido` - Generic content blocks
  - `open-graph` - Open Graph metadata

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

# AWS S3
AWS_ACCESS_KEY_ID=
AWS_ACCESS_SECRET=
AWS_REGION=
AWS_BUCKET=

# Database (production)
DATABASE_URL=postgres://user:password@host:5432/dbname
```

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
- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React 0.525.0
- **Carousel**: Embla Carousel 8.6.0
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
│   └── zustand.md       # Zustand implementation plan
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── blogs/       # Blog pages
│   │   │   └── [slug]/  # Dynamic blog post
│   │   ├── contacto/    # Contact page
│   │   ├── nosotros/    # About page
│   │   ├── productos/   # Products pages
│   │   │   └── [id]/    # Dynamic product detail
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Homepage
│   │   └── globals.css  # Global styles
│   ├── components/      # React components (domain-organized)
│   │   ├── about/       # About page components
│   │   ├── blogs/       # Blog components
│   │   ├── contact/     # Contact form components
│   │   ├── home/        # 10 homepage section components
│   │   ├── layout/      # Header, Footer
│   │   ├── product-overview/  # Product overview components
│   │   ├── products/    # Product list/detail components
│   │   └── shared/      # Shared UI components (Pagination, etc.)
│   ├── constants/       # Constants
│   │   ├── pagination.ts   # Pagination constants
│   │   └── timeout.ts      # API timeout constants
│   ├── helpers/         # Helper functions
│   │   └── menu-mapping.ts  # Navigation menu mapping
│   ├── lib/             # Library code
│   │   └── component-factory.tsx  # Dynamic component renderer
│   ├── services/        # API services (server-side)
│   │   ├── blogs/       # Blog API calls
│   │   ├── general/     # General content API
│   │   ├── inicio/      # Homepage content API
│   │   ├── nosotros/    # About content API
│   │   ├── restclient/  # Core API client
│   │   └── seo/         # SEO data API
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
  'inicio.banner': BannerSection,
  'shared.banner-comp': BannerComp,
  // ... 15+ component mappings
}

// Usage in pages
export default async function HomePage() {
  const data = await getInicioData();
  return <ComponentFactory sections={data.sections} />;
}
```

**Key characteristics**:
- Handles 15+ component types
- Extensive validation for each section
- Type-safe with TypeScript interfaces
- Fallback for unknown components

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
└── [other services]/
```

**REST Client** (`services/restclient/index.ts`):
- Server actions: `'use server'`
- Bearer token authentication
- Automatic `populate=all` for Strapi relations
- Timeout handling: 10 seconds default
- Custom `ApiError` class
- Retry logic for network failures

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

**Current**: Local component state (`useState`, `useEffect`)

**Planned**: Zustand for shopping cart
- Documentation: `frontend/docs/zustand.md` (386 lines)
- Features: Global cart state, localStorage persistence
- Status: Not yet implemented
- Phases: Setup, types, store creation, component refactoring, testing

### Development Commands

```bash
cd frontend

# Development
yarn dev              # Next.js with Turbopack

# Production
yarn build            # Production build
yarn start            # Start production server

# Quality
yarn lint             # Run ESLint

# Git hooks (automatic)
yarn prepare          # Setup Husky hooks
```

### Environment Variables

Create `.env.local` based on `.env.example`:

```env
# Strapi Backend
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://evokare.com
NEXT_PUBLIC_SITE_NAME=Evokare

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

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
- File uploads: AWS S3
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
- Verify AWS S3 credentials in backend `.env`
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

- **API Endpoints**: 5 (acerca, blog, etiqueta, general, inicio)
- **Component Groups**: 4 (general, inicio, nosotros, shared)
- **Frontend Pages**: 5 main routes + dynamic routes
- **Homepage Sections**: 10 components
- **Service Modules**: 6 (blogs, general, inicio, nosotros, restclient, seo)
- **Node Version**: v22
- **Primary Language**: Spanish (content), English (code)

---

**Last Updated**: 2026-01-15
**Maintainer**: Evokare Development Team
**License**: Proprietary
