import { Compass, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/shared/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-surface-soft px-4 py-20">
      <div className="relative w-full max-w-lg">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secundario opacity-10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-terciario opacity-10 blur-3xl" />

        <div className="relative rounded-2xl bg-white p-10 text-center shadow-md">
          <p className="mb-2 select-none bg-linear-to-br from-secundario to-terciario bg-clip-text text-8xl font-bold text-transparent">
            404
          </p>

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
            <Compass className="h-8 w-8 text-purple-500" />
          </div>

          <h1 className="mb-3 text-3xl font-bold text-text-primary">
            Página no encontrada
          </h1>
          <div className="mx-auto mb-6 h-0.5 w-16 rounded-full bg-secundario" />
          <p className="mx-auto mb-8 max-w-sm text-gray-600">
            No pudimos encontrar la página que buscas. Puede que haya sido
            movida o ya no exista.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="md" href="/">
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
            <Button variant="outline" size="md" href="/productos">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Ver nuestros productos
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
