import { useCartStore } from "@/types/store";
import { useEffect } from "react";

export default function Checkout(){
    const carStore = useCartStore();
    useEffect(()=>{
        fetch('/api/create-payment-intent',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                items: carStore.cart, 
                payment_inten_id: carStore.paymentIntent,
            })
        })
    },[carStore.cart, carStore.paymentIntent]);
    return(
        <div>
            <h1>Checkout</h1>
        </div>
    );
}