"use client";

import { useCartStore } from "@/store/cart-store";

type Props = {

  productId: string;

  name: string;

  price: number;
};

export default function AddToCartButton({

  productId,

  name,

  price

}: Props) {

  const addItem =
    useCartStore(
      state => state.addItem
    );

  return (

    <button

      onClick={() =>
        addItem({

          productId,

          name,

          price,

          quantity: 1
        })
      }

      className="
      bg-black
      text-white
      px-4
      py-2
      rounded"
    >

      Add To Cart

    </button>
  );
}
