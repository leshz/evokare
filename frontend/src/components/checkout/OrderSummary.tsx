'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore, selectTotalPrice } from '@/store';
import { formatCOP } from '@/helpers/currency';
import { OrderSummaryItem } from './OrderSummaryItem';

const emptySubscribe = () => () => {};

export function OrderSummary() {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(selectTotalPrice);

  if (!isHydrated) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <div className="animate-pulse">
          <div className="mb-4 h-6 w-40 rounded bg-gray-200" />
          <div className="h-20 rounded bg-gray-200" />
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-6 py-12 text-center shadow-md">
        <ShoppingCart className="mx-auto mb-4 h-16 w-16 text-gray-300" />
        <h3 className="mb-2 text-lg font-medium text-gray-900">
          Tu carrito está vacío
        </h3>
        <p className="mb-4 text-gray-600">
          Agrega productos antes de continuar
        </p>
        <Link
          href="/productos"
          className="from-secundario to-terciario inline-block rounded-full bg-gradient-to-br px-6 py-2 text-white"
        >
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="sticky top-4 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Resumen del pedido
      </h2>
      <div className="mb-6 max-h-96 space-y-4 overflow-y-auto">
        {items.map(item => (
          <OrderSummaryItem key={item.id} item={item} />
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4">
        <div className="mb-2 flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>{formatCOP(totalPrice)}</span>
        </div>
        <div className="mb-4 flex justify-between text-gray-600">
          <span>Envío</span>
          <span className="font-medium text-green-600">Gratis</span>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-4">
          <span className="text-xl font-bold">Total</span>
          <span className="text-secundario text-2xl font-bold">
            {formatCOP(totalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}
