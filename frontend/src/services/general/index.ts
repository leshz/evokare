import { get } from '../restclient';
import { GeneralgResponse } from './types';

export const getGeneralService = async () => {
  try {
    const generalResponse = await get<GeneralgResponse['data']>('/general');
    return generalResponse;
  } catch (error) {
    throw error;
  }
};
