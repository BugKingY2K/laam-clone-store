"use client";

import { useCartStore }
from "@/store/cart-store";

export default function CartPage() {

  const items =
    useCartStore(
      state => state.items
    );

  const total =
    items.reduce(
      (sum,item)=>
        sum +
        item.price *
        item.quantity,
      0
    );

  return (

    <div className="container-custom py-10">

      <h1 className="text-4xl font-bold mb-6">

        Shopping Cart

      </h1>

      {items.map(item => (

        <div
          key={item.productId}
          className="
          border-b
          py-4"
        >

          <p>{item.name}</p>

          <p>
            PKR {item.price}
          </p>

        </div>

      ))}

      <h2 className="mt-6 text-2xl font-bold">

        Total:

        {" "}

        PKR {total}

      </h2>

    </div>
  );
}
