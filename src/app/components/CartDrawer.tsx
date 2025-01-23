'use client'
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/types/store"
import Image from 'next/image'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";


export default function CartDrawer() {
    const useStore = useCartStore();
    return (
      <>
        <div onClick={() => useStore.toggleCart()} className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">
          <div onClick={(e) => e.stopPropagation()} className="absolute bg-zinc-800 right-0 top-0 w-1/3 h-screen p-8 overflow-scroll">
            <button onClick={() => useStore.toggleCart()} className="font-bold text-sm text-teal-600">
              Voltar Para Loja
            </button>
            <div className="border-t border-gray-300 my-5"></div>
            {useStore.cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover w-24"
                />
                <div>
                  <h2 className="w-42 truncate">{item.name}</h2>
                  <h2>Quantidade: {item.quantity}</h2>
                  <p className="text-teal-600 text-sm font-bold">{formatPrice(item.price)}</p>
                    <button  onClick={()=>useStore.addProduct(item)}><IoAddCircleOutline size={22} /></button>
                    <button onClick={()=>useStore.removeProduct(item)}><IoIosRemoveCircleOutline size={22} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }