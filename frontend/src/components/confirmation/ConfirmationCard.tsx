'use client';

import { useEffect } from 'react';
import type { ConfirmationData } from '@/types/confirmation';
import { statusConfigs } from './status-config';
import { StatusIcon } from './StatusIcon';
import { StatusMessage } from './StatusMessage';
import { OrderDetails } from './OrderDetails';
import { ActionButtons } from './ActionButtons';
import {
  getOrderSnapshot,
  clearOrderSnapshot,
  trackPurchase,
} from '@/lib/analytics';

interface ConfirmationCardProps {
  data: ConfirmationData;
}

export function ConfirmationCard({ data }: ConfirmationCardProps) {
  const config = statusConfigs[data.status];

  useEffect(() => {
    if (data.status === 'approved') {
      const snapshot = getOrderSnapshot();
      if (snapshot) {
        trackPurchase(data.paymentId ?? data.orderId ?? 'unknown', snapshot);
        clearOrderSnapshot();
      }
    }
  }, [data.status, data.paymentId, data.orderId]);

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
