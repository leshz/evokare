import type { NextConfig } from 'next';

const R2_HOST = 'https://pub-b4dc89a0ffb742f7980aa9d5dd6ac8b5.r2.dev';

// Next inyecta scripts y estilos inline para la hidratación, así que
// script-src y style-src necesitan 'unsafe-inline'. Por eso el CSP se
// despliega en Report-Only: mide qué se bloquearía sin llegar a romper el
// sitio. Pasar a Content-Security-Policy solo tras revisar los reportes.
const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  `img-src 'self' data: blob: ${R2_HOST}`,
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
  'upgrade-insecure-requests',
].join('; ');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-b4dc89a0ffb742f7980aa9d5dd6ac8b5.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: CSP_REPORT_ONLY,
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/nosotros',
        destination: '/acerca-de-mi',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
