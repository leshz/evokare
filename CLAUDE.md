# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Evokare is a modern e-commerce platform for mental health and wellness services. It's a full-stack application with a Strapi CMS backend and Next.js frontend.

## Architecture

### Backend (Strapi CMS)
- **Location**: `backend/` directory
- **Framework**: Strapi 5.20.0 (headless CMS)
- **Language**: TypeScript
- **Database**: PostgreSQL (production), SQLite (development)
- **Key Features**:
  - MercadoPago payment integration via `strapi-mercadopago` plugin
  - SEO plugin for content optimization
  - AWS S3 upload provider
  - Auto-generated TypeScript types in `types/generated/`

### Frontend (Next.js)
- **Location**: `frontend/` directory  
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Key Features**:
  - Component-based architecture organized by domain (home, about, blogs, products, contact)
  - Google Fonts integration (Montserrat, Spectral)
  - Image optimization with remote patterns for Unsplash and Picsum
  - ESLint + Prettier for code quality

## Common Development Commands

### Backend (Strapi)
```bash
cd backend
yarn develop        # Start development server with auto-reload
yarn build          # Build admin panel for production
yarn start          # Start production server
yarn strapi         # Access Strapi CLI commands
```

### Frontend (Next.js)
```bash
cd frontend
yarn dev            # Start development server with Turbopack
yarn build          # Build for production
yarn start          # Start production server
yarn lint           # Run ESLint
```

## Development Environment

### DevContainer Support
Both frontend and backend have DevContainer configurations for VS Code:
- **Frontend**: Node.js 22, includes Tailwind CSS and TypeScript extensions
- **Backend**: Includes PostgreSQL database, Strapi-specific extensions

### Package Managers
- Uses **Yarn** as the primary package manager for both frontend and backend
- Node.js version: 22.x minimum

## Component Organization

Frontend components are organized by domain:
- `components/layout/` - Header, Footer
- `components/home/` - Homepage sections  
- `components/about/` - About page components
- `components/blogs/` - Blog listing and single post
- `components/products/` - Product catalog and details
- `components/contact/` - Contact form and info

## Key Configuration Files

- `backend/config/plugins.ts` - Strapi plugin configuration (MercadoPago enabled)
- `frontend/next.config.ts` - Next.js configuration with image domains
- `frontend/eslint.config.mjs` - ESLint configuration using Next.js standards
- `.devcontainer/` - VS Code development container setup

## Database and Types

- Strapi automatically generates TypeScript types in `backend/types/generated/`
- Database migrations are stored in `backend/database/migrations/`
- Content types and API schemas are defined through Strapi's admin interface

## Integration Notes

- MercadoPago payment integration is configured via the `strapi-mercadopago` plugin
- Frontend fetches content from Strapi backend (default: http://localhost:1337)
- Uses PostgreSQL for production, SQLite for local development