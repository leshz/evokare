'use client';

import { useState } from 'react';
import { Product } from '@/services/productos/types';
import { formatCOP } from '@/helpers/currency';
import { BlocksRendererCustom } from '@/components/shared/BlocksRendererCustom';
import { useCartStore } from '@/store';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

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

  const hasInformation = product.information && product.information.length > 0;

  const tabs = [
    ...(product.middle_description ? [{ id: 'description', title: 'Descripción' }] : []),
    ...(product.information?.map((info, index) => ({
      id: `info-${index}`,
      title: info.title,
    })) || []),
  ];

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

      {product.short_description && (
        <p className="text-lg text-gray-600">{product.short_description}</p>
      )}

      <div className="flex items-center space-x-3">
        {originalPrice && (
          <span className="text-2xl text-red-500 line-through">
            {formatCOP(originalPrice)}
          </span>
        )}
        <span className="text-4xl font-bold text-gray-900">{formatCOP(displayPrice)}</span>
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
              ? 'from-secundario to-terciario hover:from-terciario hover:to-secundario bg-gradient-to-br hover:bg-gradient-to-br'
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
        <span className={`text-sm ${inStock ? 'text-green-600' : 'text-red-600'}`}>
          {inStock ? `Disponible (${product.stock} en stock)` : 'Agotado'}
        </span>
      </div>

      {(product.middle_description || hasInformation) && (
        <div className="border-t pt-6">
          {tabs.length > 1 ? (
            <>
              <div className="mb-4 flex space-x-4 overflow-x-auto border-b">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition-colors ${
                      activeTab === index
                        ? 'border-secundario text-secundario'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="min-h-[120px]">
                {activeTab === 0 && product.middle_description && (
                  <p className="leading-relaxed text-gray-700">
                    {product.middle_description}
                  </p>
                )}
                {product.information?.map((info, index) => {
                  const tabIndex = product.middle_description ? index + 1 : index;
                  return (
                    activeTab === tabIndex && (
                      <div key={info.id} className="prose prose-gray max-w-none">
                        <BlocksRendererCustom
                          content={info.information}
                          classNames={{
                            paragraph: 'leading-relaxed text-gray-700 mb-4',
                            heading: {
                              h1: 'text-2xl font-bold text-gray-900 mb-4',
                              h2: 'text-xl font-bold text-gray-900 mb-3',
                              h3: 'text-lg font-semibold text-gray-900 mb-2',
                              h4: 'text-base font-semibold text-gray-900 mb-2',
                              h5: 'text-sm font-semibold text-gray-900 mb-2',
                              h6: 'text-sm font-medium text-gray-900 mb-2',
                            },
                            list: {
                              ordered: 'list-decimal list-inside mb-4 space-y-2',
                              unordered: 'list-disc list-inside mb-4 space-y-2',
                            },
                          }}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                {tabs[0]?.title || 'Descripción'}
              </h3>
              {product.middle_description && (
                <p className="leading-relaxed text-gray-700">
                  {product.middle_description}
                </p>
              )}
              {!product.middle_description && product.information?.[0] && (
                <div className="prose prose-gray max-w-none">
                  <BlocksRendererCustom
                    content={product.information[0].information}
                    classNames={{
                      paragraph: 'leading-relaxed text-gray-700 mb-4',
                      heading: {
                        h1: 'text-2xl font-bold text-gray-900 mb-4',
                        h2: 'text-xl font-bold text-gray-900 mb-3',
                        h3: 'text-lg font-semibold text-gray-900 mb-2',
                        h4: 'text-base font-semibold text-gray-900 mb-2',
                        h5: 'text-sm font-semibold text-gray-900 mb-2',
                        h6: 'text-sm font-medium text-gray-900 mb-2',
                      },
                      list: {
                        ordered: 'list-decimal list-inside mb-4 space-y-2',
                        unordered: 'list-disc list-inside mb-4 space-y-2',
                      },
                    }}
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {product.categories && product.categories.length > 1 && (
        <div className="border-t pt-6">
          <h3 className="mb-3 text-sm font-medium text-gray-900">Categorías</h3>
          <div className="flex flex-wrap gap-2">
            {product.categories.map(category => (
              <span
                key={category.id}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
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
