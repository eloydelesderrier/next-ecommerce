'use client';
import { useCartStore } from "@/types/store"
import { formatPrice } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type CheckoutButtonProps = {
  totalPrice: number;
};

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
  const router = useRouter();
  const { user } = useUser();
  const carStore = useCartStore();

  const handleCheckout = async () => {
    if (!user) {
      carStore.toggleCart();
      router.push(`/sign-in?redirectUrl='/'`);
      return;
    }
    carStore.setCheckout('checkout');
  };

  return (
    <div>
      <p className="text-teal-600 font-bold">
        Total: {formatPrice(totalPrice)}
      </p>
      <button onClick={handleCheckout} className="w-full rounded-b-md bg-teal-600 text-white py-2 mt-2">
        Finalizar Compra
      </button>
    </div>
  );
}