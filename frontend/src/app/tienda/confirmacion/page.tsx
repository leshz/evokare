import type { Metadata } from 'next';
import Link from 'next/link';
import { ConfirmationCard } from '@/components/confirmation';
import type {
  PaymentStatus,
  ConfirmationSearchParams,
  ConfirmationData,
} from '@/types/confirmation';

export const metadata: Metadata = {
  title: 'Confirmación de pago',
  robots: { index: false, follow: false },
};

interface ConfirmationPageProps {
  searchParams: Promise<ConfirmationSearchParams>;
}

function normalizeStatus(params: ConfirmationSearchParams): PaymentStatus {
  const status = params.status || params.collection_status;

  if (!status) return 'unknown';

  const validStatuses: PaymentStatus[] = [
    'approved',
    'pending',
    'in_process',
    'rejected',
    'cancelled',
    'refunded',
    'in_mediation',
    'charged_back',
    'null',
  ];

  if (validStatuses.includes(status as PaymentStatus)) {
    return status as PaymentStatus;
  }

  return 'unknown';
}

function normalizeConfirmationData(
  params: ConfirmationSearchParams
): ConfirmationData {
  return {
    status: normalizeStatus(params),
    paymentId: params.payment_id || params.collection_id || null,
    orderId: params.external_reference || null,
    paymentType: params.payment_type || null,
  };
}

export default async function ConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const params = await searchParams;
  const confirmationData = normalizeConfirmationData(params);

  return (
    <div className="bg-principal min-h-screen">
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:text-secundario text-gray-500">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/productos"
              className="hover:text-secundario text-gray-500"
            >
              Tienda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Confirmación</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <ConfirmationCard data={confirmationData} />
      </div>
    </div>
  );
}
