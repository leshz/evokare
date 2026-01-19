'use client';

import { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useCartStore, selectTotalPrice, selectTotalItems } from '@/store';

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
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Items del carrito */}
        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <svg
                className="mx-auto mb-4 h-16 w-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9M7 13l-1.5 9m9-9v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
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
                    <p className="text-secundario font-bold">${item.price}</p>
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
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
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
                ${totalPrice}
              </span>
            </div>
            <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario w-full rounded-full bg-gradient-to-br py-3 font-medium text-white transition-all hover:bg-gradient-to-br">
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Botón del carrito */}
      <button
        onClick={toggleCart}
        className="fixed right-6 bottom-6 z-40 rounded-full bg-white p-3 shadow-lg transition-shadow hover:shadow-xl"
      >
        <svg
          className="text-secundario h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9M7 13l-1.5 9m9-9v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
          />
        </svg>
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
