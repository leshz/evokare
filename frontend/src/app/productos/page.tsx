import {
  getProductosContentService,
  getProductsService,
  getCategoriesService,
} from '@/services/productos';
import { renderSection } from '@/lib/component-factory';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface ProductosPageProps {
  searchParams: Promise<{ categoria?: string }>;
}

export default async function ProductosPage({
  searchParams,
}: ProductosPageProps) {
  const { categoria } = await searchParams;

  let secciones: Awaited<
    ReturnType<typeof getProductosContentService>
  >['data']['secciones'] = [];
  let productos: Awaited<ReturnType<typeof getProductsService>>['data'] = [];
  let categorias: Awaited<ReturnType<typeof getCategoriesService>>['data'] = [];
  let hasError = false;

  try {
    const [contentResponse, productsResponse, categoriesResponse] =
      await Promise.all([
        getProductosContentService(),
        getProductsService(undefined, undefined, categoria),
        getCategoriesService(),
      ]);

    secciones = contentResponse.data.secciones ?? [];
    productos = productsResponse.data;
    categorias = categoriesResponse.data;
  } catch (error) {
    console.error('Error loading productos page:', error);
    hasError = true;
  }

  if (hasError) {
    return (
      <div className="bg-principal flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-20">
          <AlertCircle className="text-secundario mb-4 h-12 w-12" />
          <h1 className="text-text-primary mb-2 text-2xl font-bold">
            Productos no disponibles
          </h1>
          <p className="mb-8 text-center text-gray-600">
            No pudimos cargar los productos en este momento. Por favor intenta
            más tarde.
          </p>
          <Link
            href="/"
            className="bg-secundario hover:bg-secundario-light rounded-full px-6 py-3 font-medium text-white transition-all"
          >
            Volver al inicio
          </Link>
        </div>

      </div>
    );
  }

  return (
    <div className="bg-principal min-h-screen">
      {secciones.map((section, index) =>
        renderSection(section, index, {
          categories: categorias,
          products: productos,
        })
      )}

    </div>
  );
}
