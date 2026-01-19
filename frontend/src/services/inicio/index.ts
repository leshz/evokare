import { get } from '../restclient';
import { InicioResponse } from './types';
import { STRAPI_API_PATHS } from '@/constants';

export const getInicioService = async () => {
  try {
    const inicioResponse = await get<InicioResponse['data']>(
      STRAPI_API_PATHS.INICIO
    );
    return inicioResponse;
  } catch (error) {
    throw error;
  }
};
