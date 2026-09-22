import { createFlagsDiscoveryEndpoint } from 'flags/next';
import { getProviderData } from '@flags-sdk/vercel';
import * as flags from '@/flags';

/**
 * Discovery endpoint for the Flags Explorer in the Vercel Toolbar.
 * Access is verified against FLAGS_SECRET by createFlagsDiscoveryEndpoint.
 */
export const GET = createFlagsDiscoveryEndpoint(async () => {
  return getProviderData(flags);
});
