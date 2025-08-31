export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

export interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
}
