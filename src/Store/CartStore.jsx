/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-labels */
import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware"


// Cart Store Function
const CartStore = (set) => ({
    Cart: [],
    addToCart: (obj) => {
        set((state) => ({
            Cart: [...state.Cart, obj]
        }));
    }
});

// Create the Store Hook
const useCartStore = create(
    // Presist the cart to browser localStorage 
    devtools(
        persist(CartStore, {
            name: "Cart"
        })
    )
)

export default useCartStore