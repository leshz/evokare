# Proyecto Next.js con DevContainer

Este es un proyecto [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) y configurado para desarrollo con DevContainer.

## Características

- ⚡ Next.js 15.3.4 (última versión)
- 🎨 Tailwind CSS v4 (configuración moderna)
- 📦 TypeScript
- 🛠️ ESLint + Prettier
- 🐳 DevContainer configurado
- 🚀 Hot reload automático

## Desarrollo con DevContainer

Este proyecto está configurado para funcionar con DevContainer. Si usas VS Code:

1. Instala la extensión "Dev Containers"
2. Abre el proyecto en VS Code
3. Cuando aparezca la notificación, haz clic en "Reopen in Container"
4. VS Code construirá automáticamente el contenedor y configurará el entorno

## Desarrollo Local

Si prefieres desarrollo local, ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes empezar a editar la página modificando `src/app/page.tsx`. La página se actualiza automáticamente mientras editas el archivo.

Este proyecto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente [Geist](https://vercel.com/font), una nueva familia de fuentes de Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
