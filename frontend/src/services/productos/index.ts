import { get } from '../restclient';
import { ProductosResponse } from './types';

export const getProductosContentService = async () => {
  try {
    const response = await get<ProductosResponse['data']>('/producto');
    return response;
  } catch (error) {
    throw error;
  }
};
