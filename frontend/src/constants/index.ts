export const PAGINATION_PAGE_SIZE = 6 as const;

export const DEFAULT_TIMEOUT = 10000 as const;

export const STRAPI_API_PATHS = {
  INICIO: '/inicio',
  GENERAL: '/general',
  ACERCA: '/acerca',
  BLOGS: '/blogs',
  PRODUCTO: '/producto',
  MERCADOPAGO_PRODUCTS: '/strapi-mercadopago/products',
} as const;

export const DEFAULT_PAGINATION = {
  pagination: {
    page: 1,
    pageSize: PAGINATION_PAGE_SIZE,
    pageCount: 1,
    total: 1,
  },
} as const;
