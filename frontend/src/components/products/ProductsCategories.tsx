import { ProductosCategoriasComponent } from '@/services/productos/types';

interface ProductsCategoriesProps {
  data: ProductosCategoriasComponent;
}

export function ProductsCategories({ data }: ProductsCategoriesProps) {
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
      </div>
    </section>
  );
}
