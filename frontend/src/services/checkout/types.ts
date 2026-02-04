export interface CheckoutCustomer {
  dni: number;
  name: string;
  lastName: string;
  email: string;
  phone: number;
}

export interface CheckoutFulfillment {
  address: string;
  department: string;
  city: string;
  postalCode?: string;
  message?: string;
}

export interface CheckoutItem {
  sku: string;
  quantity: number;
}

export interface CheckoutRequestBody {
  customer: CheckoutCustomer;
  fulfillment: CheckoutFulfillment;
  items: CheckoutItem[];
}

export interface CheckoutResponse {
  init_point: string;
  preferenceId: string;
  collector_id: string;
  invoiceId: number;
}

export interface CheckoutFormValues {
  nombres: string;
  apellidos: string;
  cedula: string;
  email: string;
  telefono: string;
  departamento: string;
  ciudad: string;
  direccion: string;
  codigoPostal: string;
  notas: string;
}
