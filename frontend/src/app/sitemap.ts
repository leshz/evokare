import type { MetadataRoute } from 'next';
import { getBlogsService } from '@/services/blogs';
import { getProductsService } from '@/services/productos';
import { SITE_URL } from '@/lib/site';
import type { BlogData } from '@/services/blogs/types';
import type { Product } from '@/services/productos/types';

export const dynamic = 'force-dynamic';

const SITEMAP_PAGE_SIZE = 100;

async function fetchAllBlogs(): Promise<BlogData[]> {
  const all: BlogData[] = [];
  let page = 1;

  while (true) {
    const response = await getBlogsService({ page, pageSize: SITEMAP_PAGE_SIZE });
    all.push(...(response.data ?? []));

    const pageCount = response.meta?.pagination?.pageCount ?? 1;
    if (page >= pageCount) break;
    page++;
  }

  return all;
}

async function fetchAllProducts(): Promise<Product[]> {
  const all: Product[] = [];
  let page = 1;

  while (true) {
    const response = await getProductsService(page, SITEMAP_PAGE_SIZE);
    all.push(...(response.data ?? []));

    const pageCount = response.meta?.pagination?.pageCount ?? 1;
    if (page >= pageCount) break;
    page++;
  }

  return all;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/acerca-de-mi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/agendar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/productos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogs = await fetchAllBlogs();
    blogRoutes = blogs.map((blog) => ({
      url: `${SITE_URL}/blogs/${blog.slug}`,
      lastModified: new Date(blog.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch {
    // Si el CMS no responde, continúa con rutas estáticas
  }

  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const products = await fetchAllProducts();
    productRoutes = products.map((product) => ({
      url: `${SITE_URL}/productos/${product.slug}`,
      lastModified: product.updatedAt ? new Date(product.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch {
    // Si el CMS no responde, continúa sin productos
  }

  return [...staticRoutes, ...blogRoutes, ...productRoutes];
}
