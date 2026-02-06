import { CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import type { PaymentStatus } from '@/types/confirmation';
import { statusConfigs } from './status-config';

interface StatusIconProps {
  status: PaymentStatus;
  className?: string;
}

export function StatusIcon({ status, className = '' }: StatusIconProps) {
  const config = statusConfigs[status];
  const iconClass = `h-20 w-20 ${config.iconColor} ${className}`;

  switch (status) {
    case 'approved':
      return <CheckCircle className={iconClass} />;
    case 'pending':
    case 'in_process':
      return <Clock className={iconClass} />;
    case 'rejected':
    case 'cancelled':
      return <XCircle className={iconClass} />;
    case 'refunded':
    case 'in_mediation':
    case 'charged_back':
    case 'null':
    case 'unknown':
    default:
      return <AlertCircle className={iconClass} />;
  }
}
