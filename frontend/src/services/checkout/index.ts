'use server';

import { STRAPI_API_PATHS } from '@/constants';
import { post } from '../restclient';
import type { CheckoutRequestBody, CheckoutResponse } from './types';

export async function processCheckout(
  body: CheckoutRequestBody
): Promise<CheckoutResponse> {
  const response = await post<CheckoutResponse>(
    STRAPI_API_PATHS.MERCADOPAGO_CHECKOUT,
    body
  );
  return response.data;
}
