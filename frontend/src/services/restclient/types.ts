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
  /**
   * Segundos de revalidación (ISR). `false` (default) cachea indefinidamente:
   * el dato se resuelve en build time y no se vuelve a pedir en runtime.
   */
  revalidate?: number | false;
  /**
   * Escape hatch para datos que nunca deben cachearse.
   * Excluyente con `revalidate`: Next rechaza `cache: 'no-store'` junto a
   * `next.revalidate`, por eso se modelan como campos separados.
   */
  noStore?: boolean;
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
