'use client';

import { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart as ShoppingCartIcon, X, Trash2, Package } from 'lucide-react';
import { useCartStore, selectTotalPrice } from '@/store';
import { formatCOP } from '@/helpers/currency';

const emptySubscribe = () => () => {};

export function ShoppingCart() {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isOpen = useCartStore(state => state.isOpen);
  const items = useCartStore(state => state.items);
  const toggleCart = useCartStore(state => state.toggleCart);
  const removeItem = useCartStore(state => state.removeItem);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const totalPrice = useCartStore(selectTotalPrice);

  const cartContent = (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-indigo-950/20 transition-opacity duration-300 ease-in-out ${
          isOpen
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
        onClick={toggleCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[9999] flex h-full w-96 max-w-full flex-col bg-principal shadow-2xl transition-[transform,visibility] duration-300 ease-in-out ${
          isOpen
            ? 'visible translate-x-0'
            : 'pointer-events-none invisible translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="shrink-0 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-primary">
              Carrito de Compras
            </h2>
            <button
              onClick={toggleCart}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-all hover:bg-surface-soft hover:text-secundario"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-secundario to-terciario" />
        </div>

        {/* Items del carrito */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface-soft">
                <ShoppingCartIcon className="h-10 w-10 text-secundario/50" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                Tu carrito está vacío
              </h3>
              <p className="max-w-[200px] text-sm text-gray-500">
                Comienza a agregar productos para tu bienestar
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex items-center rounded-2xl bg-surface-soft p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="mr-4 h-16 w-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Package className="h-6 w-6 text-secundario/40" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary">{item.name}</h4>
                    <p className="text-secundario font-bold">
                      {formatCOP(item.price)}
                    </p>
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-secundario/30 text-secundario transition-all hover:bg-secundario hover:text-white"
                      >
                        -
                      </button>
                      <span className="mx-3 min-w-[1.5rem] text-center font-semibold text-text-primary">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-secundario/30 text-secundario transition-all hover:bg-secundario hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-300 transition-all hover:bg-red-50 hover:text-red-400"
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
          <div className="shrink-0 p-6">
            <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-secundario/20 to-transparent" />
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-medium uppercase tracking-wide text-gray-500">
                Total
              </span>
              <span className="text-secundario text-3xl font-bold">
                {formatCOP(totalPrice)}
              </span>
            </div>
            <Link
              href="/tienda/checkout"
              onClick={toggleCart}
              className="from-secundario to-terciario hover:from-terciario hover:to-secundario block w-full rounded-full bg-gradient-to-br py-3 text-center font-medium text-white shadow-md transition-all hover:shadow-lg"
            >
              Proceder al Pago
            </Link>
          </div>
        )}
      </div>
    </>
  );

  return isHydrated ? createPortal(cartContent, document.body) : null;
}
