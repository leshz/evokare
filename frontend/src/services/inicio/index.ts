import { get } from '../restclient';
import { InicioResponse } from './types';

export const getInicioService = async () => {
  try {
    const inicioResponse = await get<InicioResponse['data']>('/inicio');
    return inicioResponse;
  } catch (error) {
    throw error;
  }
};
