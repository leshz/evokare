import { ProductGallery } from '@/components/product-overview/ProductGallery';
import { ProductInfo } from '@/components/product-overview/ProductInfo';
import { RelatedProducts } from '@/components/product-overview/RelatedProducts';
import { ShoppingCart } from '@/components/products/ShoppingCart';
import { getProductBySlugService } from '@/services/productos';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductOverview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: product } = await getProductBySlugService(slug);

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

      <ShoppingCart />
    </div>
  );
}
