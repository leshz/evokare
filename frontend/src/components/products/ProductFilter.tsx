'use client';

import { useState } from 'react';

export function ProductFilter() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = [
    'Todos',
    'Aceites Esenciales',
    'Cristales',
    'Meditación',
    'Hierbas',
    'Aromaterapia',
    'Terapia Sonora',
    'Masajes',
  ];

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    // Aquí puedes implementar la lógica de filtrado real
    console.log(`Filtrando por: ${category}`);
  };

  return (
    <section className="py-12 pb-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Explora por Categorías
          </h2>
          <p className="text-gray-600">
            Encuentra los productos perfectos para tu viaje de bienestar
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-secundario text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
