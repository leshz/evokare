'use client';

import Link from 'next/link';
import { Product } from '@/services/productos/types';
import { AdaptiveImage } from '@/components/shared/AdaptiveImage';
import { useCartStore } from '@/store';
import { formatCOP } from '@/helpers/currency';

interface ProductCardProps {
  producto: Product;
}

export function ProductCard({ producto }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const setIsOpen = useCartStore((state) => state.setIsOpen);

  const image = producto.pictures[0];
  const category = producto.categories[0]?.name || '';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(producto);
    setIsOpen(true);
  };

  return (
    <Link href={`/productos/${producto.slug}`}>
      <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-gray-100">
          {image ? (
            <AdaptiveImage
              image={image}
              format="medium"
              alt={producto.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              <span className="text-gray-400">Sin imagen</span>
            </div>
          )}
        </div>

        <div className="mb-3 flex gap-2">
          {producto.promotion?.new && (
            <span className="bg-secundario rounded-full px-3 py-1 text-sm font-medium text-white">
              Nuevo
            </span>
          )}
          {producto.promotion?.best_seller && (
            <span className="bg-terciario rounded-full px-3 py-1 text-sm font-medium text-white">
              Más Vendido
            </span>
          )}
          {producto.promotion?.recommended && (
            <span className="bg-terciario rounded-full px-3 py-1 text-sm font-medium text-white">
              Recomendado
            </span>
          )}
        </div>

        <h3 className="group-hover:text-secundario mb-2 text-xl font-semibold text-gray-900 transition-colors">
          {producto.name}
        </h3>

        <p className="mb-4 leading-relaxed text-gray-600">
          {producto.short_description}
        </p>

        {category && (
          <div className="mb-4">
            <span className="text-sm text-gray-500">{category}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {producto.promotion?.with_discount &&
              producto.promotion?.price_with_discount && (
                <span className="text-lg text-red-500 line-through">
                  {formatCOP(producto.price)}
                </span>
              )}
            <span className="text-2xl font-bold text-gray-900">
              {formatCOP(
                producto.promotion?.with_discount &&
                  producto.promotion?.price_with_discount
                  ? producto.promotion.price_with_discount
                  : producto.price
              )}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-linear-to-br px-6 py-2 font-medium text-white transition-all"
          >
            Agregar
          </button>
        </div>
      </div>
    </Link>
  );
}
