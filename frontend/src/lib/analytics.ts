import type { Product } from '@/services/productos/types';
import type { CartItem } from '@/store/cart-store';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

const CURRENCY = 'COP';

function gtag(...args: Parameters<Window['gtag']>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag(...args);
}

export function trackViewItem(product: Product) {
  const price =
    product.promotion?.with_discount && product.promotion?.price_with_discount
      ? product.promotion.price_with_discount
      : product.price;

  gtag('event', 'view_item', {
    currency: CURRENCY,
    value: price,
    items: [
      {
        item_id: String(product.id),
        item_name: product.name,
        item_category: product.categories?.[0]?.name ?? '',
        price,
        quantity: 1,
      },
    ],
  });
}

export function trackAddToCart(product: Product, quantity: number) {
  const price =
    product.promotion?.with_discount && product.promotion?.price_with_discount
      ? product.promotion.price_with_discount
      : product.price;

  gtag('event', 'add_to_cart', {
    currency: CURRENCY,
    value: price * quantity,
    items: [
      {
        item_id: String(product.id),
        item_name: product.name,
        item_category: product.categories?.[0]?.name ?? '',
        price,
        quantity,
      },
    ],
  });
}

export function trackRemoveFromCart(item: CartItem) {
  gtag('event', 'remove_from_cart', {
    currency: CURRENCY,
    value: item.price * item.quantity,
    items: [
      {
        item_id: String(item.id),
        item_name: item.name,
        item_category: item.category,
        price: item.price,
        quantity: item.quantity,
      },
    ],
  });
}

export function trackBeginCheckout(items: CartItem[], total: number) {
  gtag('event', 'begin_checkout', {
    currency: CURRENCY,
    value: total,
    items: items.map(item => ({
      item_id: String(item.id),
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: item.quantity,
    })),
  });
}

export interface OrderSnapshot {
  items: CartItem[];
  total: number;
}

export function saveOrderSnapshot(items: CartItem[], total: number) {
  try {
    localStorage.setItem(
      'evokare-last-order',
      JSON.stringify({ items, total } satisfies OrderSnapshot)
    );
  } catch {
    // localStorage can be unavailable in some environments
  }
}

export function getOrderSnapshot(): OrderSnapshot | null {
  try {
    const raw = localStorage.getItem('evokare-last-order');
    return raw ? (JSON.parse(raw) as OrderSnapshot) : null;
  } catch {
    return null;
  }
}

export function clearOrderSnapshot() {
  try {
    localStorage.removeItem('evokare-last-order');
  } catch {
    // ignore
  }
}

export function trackPurchase(
  transactionId: string,
  snapshot: OrderSnapshot
) {
  gtag('event', 'purchase', {
    transaction_id: transactionId,
    currency: CURRENCY,
    value: snapshot.total,
    items: snapshot.items.map(item => ({
      item_id: String(item.id),
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: item.quantity,
    })),
  });
}

export function trackGenerateLead() {
  gtag('event', 'generate_lead');
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  gtag('event', name, params);
}
