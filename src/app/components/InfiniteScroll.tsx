'use client';
import { ProductType } from "@/types/Product.Type";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Product from "./Product";
import { fetchProducts } from "../actions";

function InfiniteScroll({
    initialProducts
}:{
    initialProducts: ProductType[];
}){
    const [products, setProduct] = useState<ProductType[]>(initialProducts);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [ref, inView]= useInView({
        threshold: 0,
        triggerOnce: true
    });

    const lasProductId = products[products.length -1]?.id;

    const loadMoreProducts = useCallback( async()=>{
        setIsLoading(true);
        const {formatedProducts, has_more} = await fetchProducts({lasProductId});
        if (formatedProducts){
            setProduct((prevProducts)=>[...prevProducts, ...formatedProducts])
            setHasMore(has_more)
        }
        setIsLoading(false);
       
    },[lasProductId]);

    useEffect(()=>{
        if(inView && hasMore && !isLoading){
            loadMoreProducts();
        }
    },[hasMore, inView, isLoading, loadMoreProducts]);

    if (!products){
        return <div>carregando...</div>
    }

    return(
        <>
            {products.map((product) => (
                <Product key={product.id} product={product}></Product>
            ))}

            {hasMore && (
                <div ref={ref}>
                    Carregar mais registro...
                </div>
            )}
        </>
    )
}

export default InfiniteScroll;