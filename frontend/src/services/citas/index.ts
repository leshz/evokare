'use server';

import { post } from '../restclient';
import type { CitaPayload, CitaResponse } from './types';

export const submitCita = async (payload: CitaPayload): Promise<CitaResponse> => {
  const response = await post<{ data: CitaResponse }>('/citas', { data: payload });
  return response.data.data;
};
