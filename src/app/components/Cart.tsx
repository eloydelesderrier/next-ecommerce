'use client';
import { useCartStore } from "@/types/store";
import { FaCartPlus } from "react-icons/fa";
import CartDrawer from "./CartDrawer";

export default function Cart(){
    const useStore = useCartStore();
    return(
        <>
            <div onClick={()=> useStore.toggleCart()} className="flex items-center cursor-pointer relative">
                <FaCartPlus size={24} />
                <span className="bg-red-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-4 bottom-3  ">
                    {useStore.cart.length}
                </span>  
            </div>
            {
                useStore.isOpen && (
                   <CartDrawer/>
                )
            }
           
        </>
       
    )
}