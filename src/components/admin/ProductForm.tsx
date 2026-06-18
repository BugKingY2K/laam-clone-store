"use client";

import { useState }
from "react";

export default function ProductForm() {

  const [name,setName] =
    useState("");

  const [price,setPrice] =
    useState("");

  async function submit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    await fetch(
      "/api/admin/products",
      {
        method:"POST",

        headers:{
          "Content-Type":
          "application/json"
        },

        body:JSON.stringify({
          name,
          price:Number(price)
        })
      }
    );
  }

  return (

    <form
      onSubmit={submit}
      className="space-y-4"
    >

      <input

        placeholder="Product Name"

        className="
        border
        p-3
        w-full"

        value={name}

        onChange={(e)=>
          setName(
            e.target.value
          )
        }
      />

      <input

        placeholder="Price"

        className="
        border
        p-3
        w-full"

        value={price}

        onChange={(e)=>
          setPrice(
            e.target.value
          )
        }
      />

      <button
        className="
        bg-black
        text-white
        px-5
        py-3"
      >
        Save Product
      </button>

    </form>
  );
}
