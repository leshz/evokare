import { ShoppingCart } from '@/components/products/ShoppingCart';
import {
  getProductosContentService,
  getProductsService,
  getCategoriesService,
} from '@/services/productos';
import { renderSection } from '@/lib/component-factory';

interface ProductosPageProps {
  searchParams: Promise<{ categoria?: string }>;
}

export default async function ProductosPage({
  searchParams,
}: ProductosPageProps) {
  const { categoria } = await searchParams;

  const [contentResponse, productsResponse, categoriesResponse] =
    await Promise.all([
      getProductosContentService(),
      getProductsService(undefined, undefined, categoria),
      getCategoriesService(),
    ]);

  const { secciones = [] } = contentResponse.data;
  const productos = productsResponse.data;
  const categorias = categoriesResponse.data;

  return (
    <div className="bg-principal min-h-screen">
      {secciones.map((section, index) =>
        renderSection(section, index, {
          categories: categorias,
          products: productos,
        })
      )}
      <ShoppingCart />
    </div>
  );
}
