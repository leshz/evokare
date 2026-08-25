'use server';

import { post } from '../restclient';
import type { CitaPayload, CitaResponse } from './types';
import { citaSchema } from './schema';

export const submitCita = async (payload: CitaPayload): Promise<CitaResponse> => {
  const data = await citaSchema.validate(payload, {
    abortEarly: false,
    stripUnknown: true,
  });

  const response = await post<{ data: CitaResponse }>('/citas', { data });
  return response.data.data;
};
