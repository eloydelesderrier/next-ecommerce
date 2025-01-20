'use client';
import { useCartStore } from "@/store";
import { FaCartPlus } from "react-icons/fa";

export default function Cart(){
    const useStore = useCartStore();
    return(
        <>
            <div onClick={()=> useStore.toggleCart()} className="flex items-center cursor-pointer relative">
                <FaCartPlus size={24} />
                <span className="bg-red-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-4 bottom-3  ">
                    2
                </span>  
            </div>
            {
                useStore.isOpen && (
                    <div onClick={()=>useStore.toggleCart()} className="fixed w-full h-screen bg-black/25  left-0 top-0 z-50">
                        <div onClick={(e)=>e.stopPropagation()} className="absolute bg-zinc-800 right-0 top-0 w-1/3 h-screen p-12 overflow-scroll"> 
                            <h1>Meu Carrinho</h1>
                            {useStore.cart.map((item)=>(
                                <div key={item.id}> {item.name}</div>
                            ))}
                        </div>
                       
                    </div> 
                )
            }
           
        </>
       
    )
}