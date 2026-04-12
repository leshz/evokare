'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Category } from '@/services/productos/types';

interface ProductFilterProps {
  categories: Category[];
}

export function ProductFilter({ categories }: ProductFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get('categoria') || 'todos';

  const handleFilterChange = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categorySlug === 'todos') {
      params.delete('categoria');
    } else {
      params.set('categoria', categorySlug);
    }

    const queryString = params.toString();
    router.push(queryString ? `/productos?${queryString}` : '/productos');
  };

  const allCategories = [{ slug: 'todos', name: 'Todos' }, ...categories];

  return (
    <section className="py-12 pb-2">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {allCategories.map(category => (
            <button
              key={category.slug}
              onClick={() => handleFilterChange(category.slug)}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                activeFilter === category.slug
                  ? 'bg-secundario text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
