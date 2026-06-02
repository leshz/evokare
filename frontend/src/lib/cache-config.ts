// Only effective at runtime (yarn dev / yarn start), not during build.
// Using CACHE_DISABLED=true during `yarn build` will cause prerender errors.
export const isCacheDisabled = () =>
  process.env.CACHE_DISABLED === 'true' && process.env.NEXT_PHASE !== 'phase-production-build';

export const cacheConfig = (): { cache?: RequestCache } =>
  isCacheDisabled() ? { cache: 'no-store' } : {};
