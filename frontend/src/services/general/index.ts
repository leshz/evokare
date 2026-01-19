import { get } from '../restclient';
import { GeneralgResponse } from './types';
import { STRAPI_API_PATHS } from '@/constants';

export const getGeneralService = async () => {
  try {
    const generalResponse = await get<GeneralgResponse['data']>(
      STRAPI_API_PATHS.GENERAL
    );
    return generalResponse;
  } catch (error) {
    throw error;
  }
};
