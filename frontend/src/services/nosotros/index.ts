import { get } from '../restclient';
import { NosotrosResponse } from './types';

export const getNosotrosService = async () => {
  try {
    const nosotrosResponse = await get<NosotrosResponse['data']>('/acerca');
    return nosotrosResponse;
  } catch (error) {
    throw error;
  }
};
