'use client';

import { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart as ShoppingCartIcon, X, Trash2 } from 'lucide-react';
import { useCartStore, selectTotalPrice, selectTotalItems } from '@/store';
import { formatCOP } from '@/helpers/currency';

const emptySubscribe = () => () => {};

export function ShoppingCart() {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isOpen = useCartStore((state) => state.isOpen);
  const items = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const totalPrice = useCartStore(selectTotalPrice);
  const totalItems = useCartStore(selectTotalItems);

  const cartContent = (
    <>
      {/* Overlay con transición */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/30 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'pointer-events-none invisible opacity-0'
        }`}
        onClick={toggleCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer con animación de deslizamiento */}
      <div
        className={`fixed top-0 right-0 z-[9999] flex h-full w-96 max-w-full flex-col bg-white shadow-xl transition-[transform,visibility] duration-300 ease-in-out ${
          isOpen ? 'visible translate-x-0' : 'pointer-events-none invisible translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="shrink-0 border-b p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Carrito de Compras
            </h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Items del carrito */}
        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <ShoppingCartIcon className="mx-auto mb-4 h-16 w-16 text-gray-300" />
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-600">
                Comienza a agregar productos para tu bienestar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center rounded-lg bg-gray-50 p-4"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="mr-4 h-16 w-16 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-200">
                      <span className="text-xs text-gray-400">Sin imagen</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-secundario font-bold">{formatCOP(item.price)}</p>
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="mx-3 font-medium">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Total y botón de checkout */}
        {items.length > 0 && (
          <div className="shrink-0 border-t p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">Total:</span>
              <span className="text-secundario text-2xl font-bold">
                {formatCOP(totalPrice)}
              </span>
            </div>
            <Link
              href="/tienda/checkout"
              onClick={toggleCart}
              className="block w-full rounded-full bg-gradient-to-br from-secundario to-terciario py-3 text-center font-medium text-white transition-all hover:from-terciario hover:to-secundario"
            >
              Proceder al Pago
            </Link>
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed right-6 bottom-6 z-40 rounded-full bg-white p-3 shadow-lg transition-shadow hover:shadow-xl"
      >
        <ShoppingCartIcon className="text-secundario h-6 w-6" />
        {isHydrated && totalItems > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {totalItems}
          </span>
        )}
      </button>

      {/* Portal para overlay y drawer - se renderiza directamente en body */}
      {isHydrated && createPortal(cartContent, document.body)}
    </>
  );
}
