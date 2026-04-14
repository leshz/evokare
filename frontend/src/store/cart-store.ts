import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/services/productos/types';
import { trackRemoveFromCart } from '@/lib/analytics';

export interface CartItem {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  sku: string;
  image: string;
  category: string;
  stock: number;
  quantity: number;
  addedAt: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

interface CartActions {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  toggleCart: () => void;
}

export const selectTotalPrice = (state: CartState) =>
  state.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectTotalItems = (state: CartState) =>
  state.items.reduce((total, item) => total + item.quantity, 0);

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);

        const effectivePrice =
          product.promotion?.with_discount &&
          product.promotion?.price_with_discount
            ? product.promotion.price_with_discount
            : product.price;

        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          const firstImage = product.pictures[0];
          const imageUrl =
            firstImage?.formats?.medium?.url ||
            firstImage?.formats?.small?.url ||
            firstImage?.url ||
            '';

          const newItem: CartItem = {
            id: product.id,
            documentId: product.documentId,
            name: product.name,
            slug: product.slug,
            price: effectivePrice,
            originalPrice: product.promotion?.with_discount
              ? product.price
              : undefined,
            sku: product.sku,
            image: imageUrl,
            category: product.categories[0]?.name || '',
            stock: product.stock,
            quantity,
            addedAt: Date.now(),
          };
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (id: number) => {
        const item = get().items.find(i => i.id === id);
        if (item) trackRemoveFromCart(item);
        set({ items: get().items.filter(item => item.id !== id) });
      },

      updateQuantity: (id: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      setIsOpen: (isOpen: boolean) => set({ isOpen }),

      toggleCart: () => set({ isOpen: !get().isOpen }),
    }),
    {
      name: 'evokare-cart-storage',
      partialize: state => ({ items: state.items }),
    }
  )
);
