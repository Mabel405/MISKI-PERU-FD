"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { ProductType } from "@/types/product";

// Cada item del carrito ahora incluye cantidad
interface CartItem extends ProductType {
  quantity: number;
}

// Estado y funciones del carrito
interface CartStore {
  items: CartItem[];
  addItem: (data: ProductType, quantity?: number) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      // Agregar producto al carrito
      addItem: (data: ProductType, quantity = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          // Si ya existe, aumentamos la cantidad
          set({
            items: currentItems.map((item) =>
              item.id === data.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
          toast.success(`Se añadieron ${quantity} más al carrito 🛍️`);
          return;
        }

        // Nuevo producto con cantidad inicial
        set({
          items: [...currentItems, { ...data, quantity }],
        });
        toast.success("Producto añadido al carrito 🛍️");
      },

      // Eliminar producto del carrito
      removeItem: (id: number) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast("Producto eliminado del carrito 🗑️");
      },

      // Vaciar carrito
      removeAll: () => {
        set({ items: [] });
        toast("Carrito vacío 🧹");
      },

      // Actualizar cantidad de un producto
      updateQuantity: (id: number, quantity: number) => {
        if (quantity <= 0) {
          set({ items: get().items.filter((item) => item.id !== id) });
          toast("Producto eliminado del carrito 🗑️");
        } else {
          set({
            items: get().items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          });
          toast("Cantidad actualizada ✅");
        }
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);