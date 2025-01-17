import {create} from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductType } from './types/Product.Type'

type CartState = {
    cart: ProductType[];
    // addToCart: (product: ProductType)=>void
    // removeFromCar: (product: ProductType)=>void;
    isOpen: boolean;
    toggleCart: ()=>void;
};

export const useCartStore = create<CartState>()(
    persist(
      (set) => ({
        cart: [],
        isOpen: false,
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        // addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
        // removeFromCart: (product) => set((state) => ({
        //   cart: state.cart.filter((item) => item.id !== product.id),
        // })),
        // isOpen: false,
        // toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      }),
      { name: 'cart-storage' }
    )
);