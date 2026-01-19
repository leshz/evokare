import { get } from '../restclient';
import { NosotrosResponse } from './types';
import { STRAPI_API_PATHS } from '@/constants';

export const getNosotrosService = async () => {
  try {
    const nosotrosResponse = await get<NosotrosResponse['data']>(
      STRAPI_API_PATHS.ACERCA
    );
    return nosotrosResponse;
  } catch (error) {
    throw error;
  }
};
