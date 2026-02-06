export type PaymentStatus =
  | 'approved'
  | 'pending'
  | 'in_process'
  | 'rejected'
  | 'cancelled'
  | 'refunded'
  | 'in_mediation'
  | 'charged_back'
  | 'null'
  | 'unknown';

export interface ConfirmationSearchParams {
  collection_id?: string;
  collection_status?: string;
  payment_id?: string;
  status?: string;
  external_reference?: string;
  payment_type?: string;
  merchant_order_id?: string;
  preference_id?: string;
  site_id?: string;
  processing_mode?: string;
  merchant_account_id?: string;
}

export interface ConfirmationData {
  status: PaymentStatus;
  paymentId: string | null;
  orderId: string | null;
  paymentType: string | null;
}

export interface StatusConfig {
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
}
