import type { PaymentStatus, StatusConfig } from '@/types/confirmation';

export const statusConfigs: Record<PaymentStatus, StatusConfig> = {
  approved: {
    title: 'Pago Exitoso',
    description:
      'Tu pago ha sido procesado correctamente. Recibirás un correo electrónico con los detalles de tu pedido.',
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  pending: {
    title: 'Pago Pendiente',
    description:
      'Tu pago está pendiente de confirmación. Te notificaremos cuando se complete el proceso.',
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  in_process: {
    title: 'Procesando Pago',
    description:
      'Tu pago está siendo procesado. Este proceso puede tomar unos minutos.',
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  rejected: {
    title: 'Pago Rechazado',
    description:
      'Tu pago no pudo ser procesado. Por favor, intenta con otro método de pago o contacta a tu banco.',
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  cancelled: {
    title: 'Pago Cancelado',
    description:
      'El pago ha sido cancelado. Si deseas completar tu compra, por favor intenta nuevamente.',
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  refunded: {
    title: 'Pago Reembolsado',
    description:
      'Tu pago ha sido reembolsado. El monto será acreditado según los tiempos de tu entidad financiera.',
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  in_mediation: {
    title: 'Pago en Revisión',
    description:
      'Tu pago está siendo revisado. Te contactaremos pronto con más información.',
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  charged_back: {
    title: 'Contracargo',
    description:
      'Se ha iniciado un proceso de contracargo para este pago. Por favor, contacta a soporte para más información.',
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  null: {
    title: 'Estado Desconocido',
    description:
      'No pudimos determinar el estado de tu pago. Por favor, contacta a soporte si necesitas ayuda.',
    iconColor: 'text-gray-500',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
  },
  unknown: {
    title: 'Estado Desconocido',
    description:
      'No pudimos determinar el estado de tu pago. Por favor, contacta a soporte si necesitas ayuda.',
    iconColor: 'text-gray-500',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
  },
};

export const paymentTypeLabels: Record<string, string> = {
  credit_card: 'Tarjeta de Crédito',
  debit_card: 'Tarjeta de Débito',
  bank_transfer: 'Transferencia Bancaria',
  ticket: 'Efectivo',
  atm: 'Cajero Automático',
  digital_wallet: 'Billetera Digital',
  digital_currency: 'Moneda Digital',
  prepaid_card: 'Tarjeta Prepago',
  account_money: 'Dinero en Cuenta',
};

export function getPaymentTypeLabel(paymentType: string | null): string {
  if (!paymentType) return 'No especificado';
  return paymentTypeLabels[paymentType] || paymentType;
}
