"use client";

import { useState } from "react";

export default function CheckoutPage() {

  const [method,setMethod] =
    useState("COD");

  return (

    <div className="container-custom py-10">

      <h1 className="text-4xl font-bold">

        Checkout

      </h1>

      <div className="mt-6">

        <select

          value={method}

          onChange={(e)=>
            setMethod(
              e.target.value
            )
          }

          className="
          border
          p-3"
        >

          <option value="COD">

            Cash On Delivery

          </option>

          <option value="STRIPE">

            Stripe

          </option>

        </select>

      </div>

    </div>
  );
}
