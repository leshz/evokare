'use client';

import { useState } from 'react';
import { Product } from '@/services/productos/types';
import { formatCOP } from '@/helpers/currency';
import { useCartStore } from '@/store';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore(state => state.addItem);
  const setIsOpen = useCartStore(state => state.setIsOpen);

  const handleQuantityChange = (increment: boolean) => {
    if (increment) {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsOpen(true);
    setQuantity(1);
  };

  const hasDiscount =
    product.promotion?.with_discount && product.promotion?.price_with_discount;
  const displayPrice = hasDiscount
    ? product.promotion.price_with_discount
    : product.price;
  const originalPrice = hasDiscount ? product.price : null;

  const inStock = product.stock > 0;

  const primaryCategory = product.categories?.[0]?.name;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {product.promotion?.new && (
          <span className="bg-secundario rounded-full px-3 py-1 text-sm font-medium text-white">
            Nuevo
          </span>
        )}
        {product.promotion?.best_seller && (
          <span className="bg-terciario rounded-full px-3 py-1 text-sm font-medium text-white">
            Más Vendido
          </span>
        )}
        {product.promotion?.recommended && (
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">
            Recomendado
          </span>
        )}
        {primaryCategory && (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
            {primaryCategory}
          </span>
        )}
      </div>

      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

      {product.middle_description && (
        <p className="text-lg text-gray-600">{product.middle_description}</p>
      )}

      <div className="flex items-center space-x-3">
        {originalPrice && (
          <span className="text-2xl text-red-500 line-through">
            {formatCOP(originalPrice)}
          </span>
        )}
        <span className="text-4xl font-bold text-gray-900">
          {formatCOP(displayPrice)}
        </span>
        {originalPrice && product.promotion?.discount_tag && (
          <span className="rounded bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
            {product.promotion.discount_tag}
          </span>
        )}
        {originalPrice && !product.promotion?.discount_tag && (
          <span className="rounded bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
            -
            {Math.round(
              ((originalPrice - (displayPrice ?? 0)) / originalPrice) * 100
            )}
            %
          </span>
        )}
      </div>

      {product.sku && (
        <p className="text-sm text-gray-500">SKU: {product.sku}</p>
      )}

      <div className="flex items-center space-x-4">
        <div className="flex items-center rounded-lg border border-gray-300">
          <button
            onClick={() => handleQuantityChange(false)}
            className="px-4 py-2 transition-colors hover:bg-gray-100"
            disabled={!inStock}
          >
            -
          </button>
          <span className="border-x border-gray-300 px-4 py-2">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(true)}
            className="px-4 py-2 transition-colors hover:bg-gray-100"
            disabled={!inStock}
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`flex-1 rounded-full py-3 font-medium text-white transition-all ${
            inStock
              ? 'from-secundario to-terciario hover:from-terciario hover:to-secundario bg-gradient-to-br font-semibold shadow-md hover:shadow-lg'
              : 'cursor-not-allowed bg-gray-400'
          }`}
        >
          {inStock ? 'Agregar al Carrito' : 'Agotado'}
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <div
          className={`h-3 w-3 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'}`}
        ></div>
        <span
          className={`text-sm ${inStock ? 'text-green-600' : 'text-red-600'}`}
        >
          {inStock ? `Disponible (${product.stock} en stock)` : 'Agotado'}
        </span>
      </div>


{product.categories && product.categories.length > 1 && (
        <div className="pt-4">
          <h3 className="mb-3 text-sm font-medium text-gray-900">Categorías</h3>
          <div className="flex flex-wrap gap-2">
            {product.categories.map(category => (
              <span
                key={category.id}
                className="border-secundario/20 text-secundario rounded-full border bg-white px-3 py-1 text-sm"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
