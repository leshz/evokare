import { get, getCollections } from '../restclient';
import { ProductosResponse, Product } from './types';

export const getProductosContentService = async () => {
  const response = await get<ProductosResponse['data']>('/producto');
  return response;
};

export const getProductsService = async (page?: number, pageSize?: number) => {
  const queryParams: Record<string, string> = {};
  if (page) queryParams['pagination[page]'] = page.toString();
  if (pageSize) queryParams['pagination[pageSize]'] = pageSize.toString();

  const queryString = new URLSearchParams(queryParams).toString();
  const url = queryString
    ? `/strapi-mercadopago/products?${queryString}`
    : '/strapi-mercadopago/products';

  const response = await getCollections<Product[]>(url);
  return response;
};

export const getProductBySlugService = async (slug: string) => {
  const response = await get<Product>(`/strapi-mercadopago/products/${slug}`);
  return response;
};
