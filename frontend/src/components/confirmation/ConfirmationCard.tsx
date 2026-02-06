import type { ConfirmationData } from '@/types/confirmation';
import { statusConfigs } from './status-config';
import { StatusIcon } from './StatusIcon';
import { StatusMessage } from './StatusMessage';
import { OrderDetails } from './OrderDetails';
import { ActionButtons } from './ActionButtons';

interface ConfirmationCardProps {
  data: ConfirmationData;
}

export function ConfirmationCard({ data }: ConfirmationCardProps) {
  const config = statusConfigs[data.status];

  return (
    <div
      className={`rounded-2xl border ${config.borderColor} ${config.bgColor} p-8 shadow-md sm:p-12`}
    >
      <div className="flex flex-col items-center">
        <StatusIcon status={data.status} />
        <div className="mt-6">
          <StatusMessage status={data.status} />
        </div>
        <OrderDetails data={data} />
        <ActionButtons status={data.status} />
      </div>
    </div>
  );
}
