import { ProductCard } from '@/components/products/ProductCard';
import { ProductFilter } from '@/components/products/ProductFilter';
import { ShoppingCart } from '@/components/products/ShoppingCart';
import {
  getProductosContentService,
  getProductsService,
} from '@/services/productos';
import { renderSection } from '@/lib/component-factory';

export default async function ProductosPage() {
  const [contentResponse, productsResponse] = await Promise.all([
    getProductosContentService(),
    getProductsService(),
  ]);

  const { secciones = [] } = contentResponse.data;
  const productos = productsResponse.data;

  return (
    <div className="bg-principal min-h-screen">
      {secciones.map((section, index) => renderSection(section, index))}

      <ProductFilter />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productos.map(producto => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      <ShoppingCart />
    </div>
  );
}
