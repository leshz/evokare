'use server';

import { get } from '../restclient';
import type { ContactoData } from './types';
import { STRAPI_API_PATHS } from '@/constants';

export const getContactoService = async () => {
  try {
    return await get<ContactoData>(STRAPI_API_PATHS.CONTACTO);
  } catch (error) {
    throw error;
  }
};
