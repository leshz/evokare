'use server';

import { get, post } from '../restclient';
import type { ContactoData, ContactFormPayload } from './types';
import { STRAPI_API_PATHS } from '@/constants';

export const getContactoService = async () => {
  try {
    return await get<ContactoData>(STRAPI_API_PATHS.CONTACTO);
  } catch (error) {
    throw error;
  }
};

export const submitContactForm = async (payload: ContactFormPayload) => {
  return post(STRAPI_API_PATHS.MENSAJE_CONTACTOS, { data: payload });
};
