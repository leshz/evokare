import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

/**
 * Gates the online store: cart icon in the header, the /productos catalog,
 * product detail pages and the product entries in the sitemap.
 *
 * Evaluated on the server only, so the value never ships to the client bundle
 * (unlike the NEXT_PUBLIC_FEATURE_CART env var it replaces). It reaches client
 * components exclusively through explicit props.
 *
 * `defaultValue: false` fails closed: if the adapter cannot be reached the
 * store stays hidden instead of breaking the page.
 *
 * Note: the force-static routes (/, /acerca-de-mi, /contacto, /blogs/[slug])
 * bake this value in at build time, so toggling it there requires a redeploy.
 * The /productos* routes are dynamic and reflect changes immediately.
 */
export const FEATURE_CART = flag<boolean>({
  key: 'cart',
  description:
    'Enables the online store: cart icon, /productos catalog and product detail pages',
  defaultValue: false,
  adapter: vercelAdapter,
});
