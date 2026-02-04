'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useCartStore, CartItem } from '@/store';
import { formatCOP } from '@/helpers/currency';

interface Props {
  item: CartItem;
}

export function OrderSummaryItem({ item }: Props) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
      {item.image ? (
        <Image
          src={item.image}
          alt={item.name}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-lg object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-200">
          <span className="text-xs text-gray-400">Sin imagen</span>
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-medium text-gray-900">
          {item.name}
        </h4>
        <p className="text-sm font-bold text-secundario">
          {formatCOP(item.price)}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            -
          </button>
          <span className="min-w-5 text-center text-sm font-medium">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => removeItem(item.id)}
        className="shrink-0 text-gray-400 hover:text-red-500"
        aria-label={`Eliminar ${item.name}`}
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
