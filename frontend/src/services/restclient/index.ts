import 'server-only';

import {
  ApiResponse,
  ApiCollectionResponse,
  RequestConfig,
  CollectionQueryParams,
} from './types';
import { DEFAULT_TIMEOUT } from '@/constants';

class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    message?: string
  ) {
    super(message || `HTTP Error: ${status} ${statusText}`);
    this.name = 'ApiError';
  }
}

const createAbortController = (timeout: number) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  return controller;
};

const getToken = () => {
  const token = process.env.STRAPI_API_TOKEN;
  if (!token) {
    throw new Error(
      'STRAPI_API_TOKEN no está definida — revisa las env vars del build'
    );
  }
  return token;
};

const getBaseUrl = () => {
  const url = process.env.STRAPI_API_URL;
  if (!url) {
    throw new Error(
      'STRAPI_API_URL no está definida — revisa las env vars del build'
    );
  }
  return `${url}/api`;
};

/**
 * Construye las opciones de caché de un GET.
 *
 * Los GET no llevan `signal`: un AbortSignal desactiva la memoización de fetch
 * (dos llamadas idénticas en un mismo render se ejecutarían dos veces) y rompe
 * las revalidaciones en background (vercel/next.js#54045).
 */
const buildCacheOptions = (config: RequestConfig): RequestInit => {
  if (config.noStore) return { cache: 'no-store' };
  return { next: { revalidate: config.revalidate ?? false } };
};

export const get = async <T = unknown>(
  url: string,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  const requestPath = `${getBaseUrl()}${url}`;

  const params = new URLSearchParams({
    populate: 'all',
  }).toString();

  const separator = url.includes('?') ? '&' : '?';
  const fullUrl = `${requestPath}${separator}${params}`;

  try {
    const response = await fetch(fullUrl, {
      ...buildCacheOptions(config),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
        ...config.headers,
      },
    });

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    const { data } = await response.json();

    return {
      data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: any) {
    throw new ApiError(
      error.status || 500,
      error.statusText || 'Unknown Error',
      `${error.message} - ${requestPath}`
    );
  }
};

export const getCollections = async <T = unknown>(
  url: string,
  queryParams: CollectionQueryParams = {},
  config: RequestConfig = {}
): Promise<ApiCollectionResponse<T>> => {
  const requestPath = `${getBaseUrl()}${url}`;

  const params = new URLSearchParams();

  if (queryParams.populate) {
    if (Array.isArray(queryParams.populate)) {
      queryParams.populate.forEach(field => params.append('populate', field));
    } else {
      params.set('populate', queryParams.populate);
    }
  } else {
    params.set('populate', 'all');
  }

  if (queryParams.page) {
    params.set('pagination[page]', queryParams.page.toString());
  }
  if (queryParams.pageSize) {
    params.set('pagination[pageSize]', queryParams.pageSize.toString());
  }

  if (queryParams.sort) {
    params.set('sort', queryParams.sort);
  }

  if (queryParams.filters) {
    Object.entries(queryParams.filters).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([operator, filterValue]) => {
          params.set(`filters[${key}][${operator}]`, String(filterValue));
        });
      } else {
        params.set(`filters[${key}]`, String(value));
      }
    });
  }

  const separator = url.includes('?') ? '&' : '?';
  const fullUrl = `${requestPath}${separator}${params.toString()}`;

  try {
    const response = await fetch(fullUrl, {
      ...buildCacheOptions(config),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
        ...config.headers,
      },
    });

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    const { data = [], meta } = await response.json();

    return {
      data,
      status: response.status,
      statusText: response.statusText,
      meta,
    };
  } catch (error: any) {
    throw new ApiError(
      error.status || 500,
      error.statusText || 'Unknown Error',
      `${error.message} - ${requestPath}`
    );
  }
};

export const post = async <T = unknown>(
  url: string,
  body: any,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  const controller = createAbortController(config.timeout || DEFAULT_TIMEOUT);

  const requestPath = `${getBaseUrl()}${url}`;

  const response = await fetch(requestPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
      ...config.headers,
    },
    body: JSON.stringify(body),
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new ApiError(response.status, response.statusText);
  }

  const data = await response.json();

  return {
    data,
    status: response.status,
    statusText: response.statusText,
  };
};
