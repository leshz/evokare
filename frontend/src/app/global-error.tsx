'use client';

import { useEffect } from 'react';
import { Montserrat } from 'next/font/google';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

const montserrat = Montserrat({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es">
      <body
        className={montserrat.variable}
        style={{
          margin: 0,
          fontFamily: 'var(--font-primary), system-ui, sans-serif',
          background: '#f5f3ff',
          color: '#1e1b4b',
        }}
        suppressHydrationWarning
      >
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
            <div
              style={{
                position: 'absolute',
                top: '-5rem',
                left: '-5rem',
                width: '18rem',
                height: '18rem',
                background:
                  'radial-gradient(circle, #9f97f0 0%, transparent 70%)',
                opacity: 0.15,
                borderRadius: '9999px',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-5rem',
                right: '-5rem',
                width: '18rem',
                height: '18rem',
                background:
                  'radial-gradient(circle, #5893f7 0%, transparent 70%)',
                opacity: 0.15,
                borderRadius: '9999px',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'relative',
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                padding: '2.5rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '9999px',
                  background: '#e0e7ff',
                }}
              >
                <AlertTriangle
                  style={{ width: '2.5rem', height: '2.5rem', color: '#4f46e5' }}
                />
              </div>

              <h1
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  color: '#1e1b4b',
                  marginBottom: '0.75rem',
                  marginTop: 0,
                }}
              >
                Error del sistema
              </h1>

              <div
                style={{
                  margin: '0 auto 1.5rem',
                  height: '2px',
                  width: '4rem',
                  borderRadius: '9999px',
                  background: '#9f97f0',
                }}
              />

              <p
                style={{
                  color: '#4b5563',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                  marginTop: 0,
                }}
              >
                Ha ocurrido un problema con la plataforma. Por favor intenta
                recargar la página o vuelve al inicio.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={reset}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    background:
                      'linear-gradient(to bottom right, #9f97f0, #5893f7)',
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    fontFamily: 'inherit',
                  }}
                >
                  <RefreshCw style={{ width: '1rem', height: '1rem' }} />
                  Recargar página
                </button>

                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    border: '2px solid #9f97f0',
                    color: '#9f97f0',
                    fontWeight: 500,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    background: 'transparent',
                  }}
                >
                  <Home style={{ width: '1rem', height: '1rem' }} />
                  Ir al inicio
                </a>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="/contacto"
                  style={{
                    color: '#9f97f0',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                  }}
                >
                  ¿Necesitas ayuda? Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
