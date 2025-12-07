export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiCollectionResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  meta: Pagination;
}

export interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
}

export interface CollectionQueryParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  filters?: Record<string, any>;
  populate?: string | string[];
}

export interface Pagination {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
