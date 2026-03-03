import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { savePoroducts } from "../Firebases/products.db";

interface UserData {
  name: string;
  email: string;
}

interface Product {
  name?: string;
  img?: string;
  id?: string;
  size?: string;
  ean?: string;
  kcal?: number;
  protein?: string;
  fat?: string;
  expiryDate?: string;
  quantity?: number;
  daysLeft?: string;
}

export interface FridgeStorage {
  user: UserData | null;
  product: Product[];
  // interface - opisujemy kształt funkcji
  // void - funkcja tylko przypisuje stan, nic nie zwraca
  // podobnie jak void w C/C++
  setUser: (user: UserData | null) => void;
  addProduct: (product: Product) => void;
  removeProdcut: (id: string) => void;
  updateProduct: (id: string, data: Partial<Product>) => void;
  updateQuantity: (id: string, quantity: Partial<Product>) => void;
  setProducts: (products: Product[]) => void;
}

export const useFridgeStore = create<FridgeStorage>()(
  devtools((set) => ({
    user: null,
    product: [],

    setUser: (user: UserData | null) => set({ user }),
    addProduct: (product: Product) =>
      set((state) => ({
        product: [...state.product, product],
      })),

    removeProdcut: (id: string) =>
      set((state) => ({
        product: state.product.filter((p) => p.id !== id),
      })),

    updateProduct: (id: string, data: Partial<Product>) =>
      set((state) => ({
        product: state.product.map((p) =>
          p.id === id ? { ...p, ...data } : p,
        ),
      })),

    setProducts: (products: Product[]) => set({ product: products }),
  })),
);

useFridgeStore.subscribe((state) => {
  console.log("produkty w subscribe:", state.product);
  if (state.product.length > 0) {
    savePoroducts();
  }
});
