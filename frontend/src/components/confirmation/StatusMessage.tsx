import type { PaymentStatus } from '@/types/confirmation';
import { statusConfigs } from './status-config';

interface StatusMessageProps {
  status: PaymentStatus;
}

export function StatusMessage({ status }: StatusMessageProps) {
  const config = statusConfigs[status];

  return (
    <div className="text-center">
      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        {config.title}
      </h1>
      <p className="text-gray-600">{config.description}</p>
    </div>
  );
}
