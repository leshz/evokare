import { ProductGallery } from '@/components/product-overview/ProductGallery';
import { ProductInfo } from '@/components/product-overview/ProductInfo';
import { RelatedProducts } from '@/components/product-overview/RelatedProducts';
import { getProductBySlugService } from '@/services/productos';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AlertCircle } from 'lucide-react';

export default async function ProductOverview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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

  return (
    <div className="bg-principal min-h-screen">
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:text-secundario text-gray-500">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/productos"
              className="hover:text-secundario text-gray-500"
            >
              Productos
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
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

        {primaryCategory && (
          <div className="mt-16">
            <RelatedProducts
              currentProductId={product.id}
              category={primaryCategory}
            />
          </div>
        )}
      </div>
    </div>
  );
}
