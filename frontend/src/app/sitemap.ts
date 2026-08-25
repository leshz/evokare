import type { MetadataRoute } from 'next';
import { getBlogsService } from '@/services/blogs';
import { getProductsService } from '@/services/productos';

/**
 * Se resuelve en build time. `lastModified` usa la fecha del build para las
 * rutas fijas y el `updatedAt` real de cada entrada cuando existe: un
 * `new Date()` por entrada cambiaba el sitemap en cada petición y generaba
 * ruido para los crawlers.
 */
const BUILD_DATE = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://elisahorta.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.7,
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
    {
      url: `${baseUrl}/productos`,
      lastModified: BUILD_DATE,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogsResponse = await getBlogsService({ pageSize: 100 });
    blogRoutes = (blogsResponse.data ?? []).map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(blog.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch {
    // Si el CMS no responde, continúa con rutas estáticas
  }

  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const productsResponse = await getProductsService(undefined, 100);
    productRoutes = (productsResponse.data ?? []).map((product) => ({
      url: `${baseUrl}/productos/${product.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch {
    // Si el CMS no responde, continúa sin productos
  }

  return [...staticRoutes, ...blogRoutes, ...productRoutes];
}
