import { get, getCollections } from '../restclient';
import { ProductosResponse, Product, Category } from './types';
import { STRAPI_API_PATHS } from '@/constants';

export const getProductosContentService = async () => {
  const response = await get<ProductosResponse['data']>(
    STRAPI_API_PATHS.PRODUCTO
  );
  return response;
};

export const getProductsService = async (
  page?: number,
  pageSize?: number,
  categorySlug?: string
) => {
  const queryParams: Record<string, string> = {};
  if (page) queryParams['pagination[page]'] = page.toString();
  if (pageSize) queryParams['pagination[pageSize]'] = pageSize.toString();

  if (categorySlug && categorySlug !== 'todos') {
    queryParams['filters[categories][slug][$eq]'] = categorySlug;
  }

  const queryString = new URLSearchParams(queryParams).toString();
  const url = queryString
    ? `${STRAPI_API_PATHS.MERCADOPAGO_PRODUCTS}?${queryString}`
    : STRAPI_API_PATHS.MERCADOPAGO_PRODUCTS;

  const response = await getCollections<Product[]>(url);
  return response;
};

export const getCategoriesService = async () => {
  const response = await getCollections<Category[]>(
    STRAPI_API_PATHS.MERCADOPAGO_CATEGORIES
  );
  return response;
};

export const getProductBySlugService = async (slug: string) => {
  const response = await get<Product>(
    `${STRAPI_API_PATHS.MERCADOPAGO_PRODUCTS}/${slug}`
  );
  return response;
};
