import type { MetadataRoute } from 'next';
import { getBlogsService } from '@/services/blogs';
import { getInicioService } from '@/services/inicio';
import { getNosotrosService } from '@/services/nosotros';
import { getContactoService } from '@/services/contacto';
import { getProductsService } from '@/services/productos';
import { FEATURE_CART } from '@/flags';
import { SITE_URL } from '@/lib/site';

// El flag del carrito se evalúa aquí dentro; sin esta directiva explícita esa
// llamada opta al sitemap fuera del prerender y cada crawler golpearía Strapi.
export const dynamic = 'force-static';

/**
 * Se resuelve en build time. `lastModified` usa el `updatedAt` real de Strapi
 * (single types para inicio, acerca y contacto; la entrada más reciente para
 * /blogs y el `updatedAt` de cada entrada para blogs y productos). La fecha
 * del build queda como respaldo si falta el dato o falla la consulta: un
 * `new Date()` por entrada cambiaba el sitemap en cada petición y generaba
 * ruido para los crawlers.
 */
const BUILD_DATE = new Date();

const toDate = (value?: string | null): Date => {
  if (!value) return BUILD_DATE;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? BUILD_DATE : date;
};

const getUpdatedAt = async (
  label: string,
  fetcher: () => Promise<{ data: { updatedAt?: string } }>
): Promise<Date> => {
  try {
    return toDate((await fetcher()).data?.updatedAt);
  } catch (error) {
    console.warn(`[sitemap] No se pudo cargar la fecha de ${label}:`, error);
    return BUILD_DATE;
  }
};

const MAX_PAGES = 50;
const PAGE_SIZE = 100;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  const [inicioDate, acercaDate, contactoDate] = await Promise.all([
    getUpdatedAt('inicio', getInicioService),
    getUpdatedAt('acerca', getNosotrosService),
    getUpdatedAt('contacto', getContactoService),
  ]);

  const blogRoutes: MetadataRoute.Sitemap = [];
  try {
    for (let page = 1; page <= MAX_PAGES; page++) {
      const response = await getBlogsService({ page, pageSize: PAGE_SIZE });
      const entries = response.data ?? [];

      blogRoutes.push(
        ...entries.map(blog => ({
          url: `${baseUrl}/blogs/${blog.slug}`,
          lastModified: toDate(blog.updatedAt),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }))
      );

      const pageCount = response.meta?.pagination?.pageCount ?? 1;
      if (page >= pageCount) break;
    }
  } catch (error) {
    console.warn('[sitemap] No se pudieron cargar los blogs:', error);
  }

  // /blogs changes whenever any post does: use the most recent post date.
  const blogDates = blogRoutes.flatMap(route =>
    route.lastModified instanceof Date ? [route.lastModified.getTime()] : []
  );
  const latestBlogDate =
    blogDates.length > 0 ? new Date(Math.max(...blogDates)) : BUILD_DATE;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: inicioDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/acerca-de-mi`,
      lastModified: acercaDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/agendar`,
      // No CMS content backs this page, so there is no updatedAt to use.
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: contactoDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: latestBlogDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = [];
  if (await FEATURE_CART()) {
    productRoutes.push({
      url: `${baseUrl}/productos`,
      lastModified: BUILD_DATE,
      changeFrequency: 'daily',
      priority: 0.9,
    });

    try {
      for (let page = 1; page <= MAX_PAGES; page++) {
        const response = await getProductsService(page, PAGE_SIZE);
        const entries = response.data ?? [];

        productRoutes.push(
          ...entries.map(product => ({
            url: `${baseUrl}/productos/${product.slug}`,
            lastModified: product.updatedAt
              ? new Date(product.updatedAt)
              : BUILD_DATE,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
          }))
        );

        const pageCount = response.meta?.pagination?.pageCount ?? 1;
        if (page >= pageCount) break;
      }
    } catch (error) {
      console.warn('[sitemap] No se pudieron cargar los productos:', error);
    }
  }

  return [...staticRoutes, ...blogRoutes, ...productRoutes];
}
