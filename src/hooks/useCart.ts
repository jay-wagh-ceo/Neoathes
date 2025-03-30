import { create } from 'zustand';
import { CartItem, Product, Size } from '@/types/product';
import toast from 'react-hot-toast';

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product, size: Size) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  
  addToCart: (product, size) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { product, size, quantity: 1 }],
      };
    });

    toast.success('Added to cart!');
  },

  removeFromCart: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotal: () => {
    const state = get();
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    
    // Apply 10% discount if more than one item
    if (state.items.length > 1) {
      return subtotal * 0.9;
    }
    
    return subtotal;
  },
})); 