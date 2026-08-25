import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Elisa Horta | Psicóloga Clínica en Bogotá',
    short_name: 'Elisa Horta',
    description:
      'Psicoterapia individual, constelaciones familiares y talleres grupales en Bogotá.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbfcff',
    theme_color: '#012049',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
