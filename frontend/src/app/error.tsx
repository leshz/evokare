'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/shared/Button';

export default function Error({
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
    <main className="flex min-h-screen items-center justify-center bg-surface-soft px-4 py-20">
      <div className="relative w-full max-w-lg">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-secundario opacity-10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-terciario opacity-10 blur-3xl" />

        <div className="relative rounded-2xl bg-white p-10 text-center shadow-md">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
            <AlertCircle className="h-10 w-10 text-indigo-500" />
          </div>

          <h1 className="mb-3 text-3xl font-bold text-text-primary">
            Algo salió mal
          </h1>
          <div className="mx-auto mb-6 h-0.5 w-16 rounded-full bg-secundario" />
          <p className="mx-auto mb-8 max-w-sm text-gray-600">
            Ocurrió un error inesperado. Por favor intenta de nuevo o vuelve al
            inicio.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="md" onClick={reset}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Intentar de nuevo
            </Button>
            <Button variant="outline" size="md" href="/">
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </div>

          <div className="mt-6">
            <Button variant="ghost" size="sm" href="/contacto">
              ¿Necesitas ayuda? Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
