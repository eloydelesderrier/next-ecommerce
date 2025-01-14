import { ProductType } from "@/types/Product.Type";
import Image from "next/image";
import ProductImage from "./ProductImage";

type ProductProps = {
    product:ProductType
}

export default function Product({product}:ProductProps) {

    return(
        <div className="flex flex-col shadow-lg h-96 bg-gray-950 p-5 text-gray-400">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill
                />
            </div>
            <div className="flex justify-between font-bols my-3">
                <p className="w-40 truncate">
                    {product.title}
                </p> 
                
                <p className="text-md text-teal-400">
                    ${product.price}
                </p> 
            </div>
            <button className="roundend-md bg-teal-600 text-white p-3.5 py-2.5 text-sm text-center">Adicionar ao Carrinho</button>
        </div>
    )
}