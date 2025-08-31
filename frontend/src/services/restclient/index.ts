'use server';

import { ApiResponse, RequestConfig } from './types';

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

const DEFAULT_TIMEOUT = 10000;

const createAbortController = (timeout: number) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  return controller;
};

const token = `${process.env.STRAPI_API_TOKEN}`;
const baseUrl = `${process.env.STRAPI_API_URL}/api`;

export const get = async <T = any>(
  url: string,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  const controller = createAbortController(config.timeout || DEFAULT_TIMEOUT);

  const requestPath = `${baseUrl}${url}`;
  try {
    console.log(`GET Request to: ${requestPath}`);

    const params = new URLSearchParams({
      populate: 'all',
    }).toString();

    const response = await fetch(`${requestPath}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${token}`,
        ...config.headers,
      },
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
  } catch (error: any) {
    throw new ApiError(
      error.status || 500,
      error.statusText || 'Unknown Error',
      `${error.message} - ${requestPath}`
    );
  }
};

export const post = async <T = any>(
  url: string,
  body: any,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  const controller = createAbortController(config.timeout || DEFAULT_TIMEOUT);

  const requestPath = `${baseUrl}${url}`;

  const response = await fetch(requestPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer  ${token}`,
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
