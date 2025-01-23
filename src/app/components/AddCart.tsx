'use client';
import { useCartStore } from "@/types/store";
import { ProductType } from "@/types/Product.Type";


export default function Product({product}: {product: ProductType}){
    const {addProduct} = useCartStore();

    return(
        <button onClick={()=>addProduct(product)}  
            className="roundend-md bg-teal-600 text-white p-3.5 py-2.5 text-sm text-center">
            Adicionar ao Carrinho
        </button>
    )
}