import { Suspense } from 'react';
import {
  ProductosCategoriasComponent,
  Category,
  Product,
} from '@/services/productos/types';
import { ProductFilter } from './ProductFilter';
import { ProductCard } from './ProductCard';

interface ProductsCategoriesProps {
  data: ProductosCategoriasComponent;
  categories: Category[];
  products: Product[];
}

export function ProductsCategories({
  data,
  categories,
  products,
}: ProductsCategoriesProps) {
  if (!data) {
    console.error('ProductsCategories: data is undefined');
    return null;
  }

  const { titulo, subtitulo } = data;

  if (!titulo) {
    console.warn('ProductsCategories: Missing required data (titulo)');
    return null;
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{titulo}</h2>
          {subtitulo && (
            <p className="mx-auto max-w-2xl text-gray-600">{subtitulo}</p>
          )}
        </div>

        <Suspense fallback={<div>Cargando filtros...</div>}>
          <ProductFilter categories={categories} />
        </Suspense>

        <div className="mt-8">
          {products.length === 0 ? (
            <p className="text-center text-gray-500">
              No hay productos en esta categoría
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map(producto => (
                <ProductCard key={producto.id} producto={producto} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
