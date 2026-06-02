import type { Metadata } from 'next';
import { ProductGallery } from '@/components/product-overview/ProductGallery';
import { ProductInfo } from '@/components/product-overview/ProductInfo';
import { ProductInformation } from '@/components/product-overview/ProductInformation';
// import { RelatedProducts } from '@/components/product-overview/RelatedProducts';
import { getProductBySlugService, getProductsService } from '@/services/productos';
import { getProductSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AlertCircle } from 'lucide-react';
import { FEATURE_FLAGS } from '@/constants/feature-flags';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const { data } = await getProductsService(undefined, 100);
  return data.map(product => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { data: product } = await getProductBySlugService(slug);
    return {
      title: product.name,
      description: product.short_description,
      openGraph: {
        title: product.name,
        description: product.short_description,
        type: 'website',
        ...(product.pictures?.[0]?.url
          ? {
              images: [
                {
                  url: product.pictures[0].url,
                  width: product.pictures[0].width,
                  height: product.pictures[0].height,
                  alt: product.pictures[0].alternativeText ?? product.name,
                },
              ],
            }
          : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title: product.name,
        description: product.short_description,
        ...(product.pictures?.[0]?.url
          ? { images: [product.pictures[0].url] }
          : {}),
      },
    };
  } catch {
    return { title: 'Producto' };
  }
}

export default async function ProductOverview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!FEATURE_FLAGS.CART) notFound();

  const { slug } = await params;

  let product;
  try {
    const response = await getProductBySlugService(slug);
    product = response.data;
  } catch (error) {
    console.error('Error loading product:', error);
    return (
      <div className="bg-principal flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-20">
          <AlertCircle className="text-secundario mb-4 h-12 w-12" />
          <h1 className="text-text-primary mb-2 text-2xl font-bold">
            Producto no disponible
          </h1>
          <p className="mb-8 text-center text-gray-600">
            No pudimos cargar este producto. Por favor intenta más tarde.
          </p>
          <Link
            href="/productos"
            className="bg-secundario hover:bg-secundario-light rounded-full px-6 py-3 font-medium text-white transition-all"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const primaryCategory = product.categories?.[0]?.slug;
  const productJsonLd = getProductSchema(product);
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Productos', url: '/productos' },
    { name: product.name },
  ]);

  return (
    <div className="bg-principal min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 text-sm">
            <Link href="/" className="hover:text-secundario shrink-0 text-gray-500">
              Inicio
            </Link>
            <span className="shrink-0 text-gray-400">/</span>
            <Link
              href="/productos"
              className="hover:text-secundario shrink-0 text-gray-500"
            >
              Productos
            </Link>
            <span className="shrink-0 text-gray-400">/</span>
            <span className="truncate text-gray-900">{product.name}</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ProductGallery
            images={product.pictures || []}
            productName={product.name}
          />

          <ProductInfo product={product} />
        </div>

        {product.information && product.information.length > 0 && (
          <ProductInformation information={product.information} />
        )}

        {primaryCategory && (
          <div className="mt-16">
            {/* <RelatedProducts
              currentProductId={product.id}
              category={primaryCategory}
            /> */}
          </div>
        )}
      </div>
    </div>
  );
}
