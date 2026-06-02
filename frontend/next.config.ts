import type { NextConfig } from 'next';

const cacheDisabled = process.env.CACHE_DISABLED === 'true';

const nextConfig: NextConfig = {
  ...(cacheDisabled && {
    experimental: {
      staleTimes: { dynamic: 0, static: 0 },
    },
  }),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evokare-next-staging.up.railway.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-b4dc89a0ffb742f7980aa9d5dd6ac8b5.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
