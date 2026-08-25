import type { MetadataRoute } from 'next';
import { getBlogsService } from '@/services/blogs';
import { getProductsService } from '@/services/productos';
import { FEATURE_FLAGS } from '@/constants/feature-flags';
import { SITE_URL } from '@/lib/site';

/**
 * Se resuelve en build time. `lastModified` usa la fecha del build para las
 * rutas fijas y el `updatedAt` real de cada entrada cuando existe: un
 * `new Date()` por entrada cambiaba el sitemap en cada petición y generaba
 * ruido para los crawlers.
 */
const BUILD_DATE = new Date();

const MAX_PAGES = 50;
const PAGE_SIZE = 100;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/acerca-de-mi`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/agendar`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: BUILD_DATE,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = [];
  try {
    for (let page = 1; page <= MAX_PAGES; page++) {
      const response = await getBlogsService({ page, pageSize: PAGE_SIZE });
      const entries = response.data ?? [];

      blogRoutes.push(
        ...entries.map(blog => ({
          url: `${baseUrl}/blogs/${blog.slug}`,
          lastModified: new Date(blog.updatedAt),
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

  const productRoutes: MetadataRoute.Sitemap = [];
  if (FEATURE_FLAGS.CART) {
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
