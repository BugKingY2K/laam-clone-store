"use client";

import { create } from "zustand";

type CartItem = {

  productId: string;

  name: string;

  price: number;

  quantity: number;
};

type CartState = {

  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (
    productId: string
  ) => void;

  clearCart: () => void;
};

export const useCartStore =
  create<CartState>((set) => ({

    items: [],

    addItem: (item) =>
      set((state) => ({

        items: [
          ...state.items,
          item
        ]
      })),

    removeItem: (id) =>
      set((state) => ({

        items:
          state.items.filter(
            i => i.productId !== id
          )
      })),

    clearCart: () =>
      set({
        items: []
      })
  }));
