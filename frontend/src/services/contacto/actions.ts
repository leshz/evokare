'use server';

import { post } from '../restclient';
import type { ContactFormPayload } from './types';
import { STRAPI_API_PATHS } from '@/constants';

export const submitContactForm = async (payload: ContactFormPayload) => {
  return post(STRAPI_API_PATHS.MENSAJE_CONTACTOS, { data: payload });
};
