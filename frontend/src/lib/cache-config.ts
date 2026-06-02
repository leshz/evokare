export const isCacheDisabled = () => process.env.CACHE_DISABLED === 'true';

export const cacheConfig = (): { cache?: RequestCache } =>
  isCacheDisabled() ? { cache: 'no-store' } : {};
