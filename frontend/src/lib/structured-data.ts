import { Product } from '@/services/productos/types';
import { BlogData } from '@/services/blogs/types';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://evokare.com';

export function getBlogPostingSchema(blog: BlogData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.titulo,
    description: blog.introduccion,
    image: blog.media?.[0]?.url ?? undefined,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
    url: `${BASE_URL}/blogs/${blog.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Evokare',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Evokare',
      url: BASE_URL,
    },
  };
}

export function getProductSchema(product: Product) {
  const availability =
    product.stock > 0
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock';

  const price =
    product.promotion?.with_discount && product.promotion.price_with_discount != null
      ? product.promotion.price_with_discount
      : product.price;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.short_description,
    image: product.pictures?.[0]?.url ?? undefined,
    sku: product.sku,
    url: `${BASE_URL}/productos/${product.slug}`,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'MXN',
      availability,
      url: `${BASE_URL}/productos/${product.slug}`,
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: `${BASE_URL}${item.url}` } : {}),
    })),
  };
}
