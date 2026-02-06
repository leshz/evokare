import type { ConfirmationData } from '@/types/confirmation';
import { getPaymentTypeLabel } from './status-config';

interface OrderDetailsProps {
  data: ConfirmationData;
}

export function OrderDetails({ data }: OrderDetailsProps) {
  const { orderId, paymentId, paymentType } = data;

  if (!orderId && !paymentId && !paymentType) {
    return null;
  }

  return (
    <div className="mt-8 w-full max-w-md rounded-xl border border-gray-200 bg-gray-50 px-8 py-7">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        Detalles del Pedido
      </h2>
      <dl className="space-y-5">
        {orderId && (
          <div className="flex flex-col">
            <dt className="text-sm text-gray-500">Número de Pedido</dt>
            <dd className="text-lg font-medium text-gray-900">#{orderId}</dd>
          </div>
        )}
        {paymentId && (
          <div className="flex flex-col">
            <dt className="text-sm text-gray-500">Referencia de Pago</dt>
            <dd className="text-lg font-medium text-gray-900">{paymentId}</dd>
          </div>
        )}
        {paymentType && (
          <div className="flex flex-col">
            <dt className="text-sm text-gray-500">Método de Pago</dt>
            <dd className="text-lg font-medium text-gray-900">
              {getPaymentTypeLabel(paymentType)}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
