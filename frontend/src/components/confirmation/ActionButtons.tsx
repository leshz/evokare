import Link from 'next/link';
import type { PaymentStatus } from '@/types/confirmation';

interface ActionButtonsProps {
  status: PaymentStatus;
}

export function ActionButtons({ status }: ActionButtonsProps) {
  const isSuccess = status === 'approved';
  const isPending = status === 'pending' || status === 'in_process';
  const isError =
    status === 'rejected' ||
    status === 'cancelled' ||
    status === 'null' ||
    status === 'unknown';

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
      {isSuccess && (
        <>
          <Link
            href="/productos"
            className="from-secundario to-terciario hover:from-terciario hover:to-secundario inline-flex items-center justify-center rounded-full bg-linear-to-br px-8 py-3 font-medium text-white transition-all"
          >
            Seguir Comprando
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50"
          >
            Volver al Inicio
          </Link>
        </>
      )}

      {isPending && (
        <>
          <Link
            href="/"
            className="from-secundario to-terciario hover:from-terciario hover:to-secundario inline-flex items-center justify-center rounded-full bg-linear-to-br px-8 py-3 font-medium text-white transition-all"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50"
          >
            Contactar Soporte
          </Link>
        </>
      )}

      {isError && (
        <>
          <Link
            href="/tienda/checkout"
            className="from-secundario to-terciario hover:from-terciario hover:to-secundario inline-flex items-center justify-center rounded-full bg-linear-to-br px-8 py-3 font-medium text-white transition-all"
          >
            Intentar Nuevamente
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50"
          >
            Contactar Soporte
          </Link>
        </>
      )}

      {!isSuccess && !isPending && !isError && (
        <>
          <Link
            href="/"
            className="from-secundario to-terciario hover:from-terciario hover:to-secundario inline-flex items-center justify-center rounded-full bg-linear-to-br px-8 py-3 font-medium text-white transition-all"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50"
          >
            Contactar Soporte
          </Link>
        </>
      )}
    </div>
  );
}
