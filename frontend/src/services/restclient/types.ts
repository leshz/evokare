export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
}

export interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
}
