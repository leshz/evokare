'use server';

import { post } from '../restclient';
import type { ContactFormPayload } from './types';
import { contactFormSchema } from './schema';
import { STRAPI_API_PATHS } from '@/constants';

export const submitContactForm = async (payload: ContactFormPayload) => {
  const data = await contactFormSchema.validate(payload, {
    abortEarly: false,
    stripUnknown: true,
  });

  return post(STRAPI_API_PATHS.MENSAJE_CONTACTOS, { data });
};
