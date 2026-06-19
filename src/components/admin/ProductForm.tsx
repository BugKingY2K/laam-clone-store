"use client";

import { useState }
from "react";

export default function ProductForm({

  categories

}:any) {

  const [name,setName] =
    useState("");

  const [price,setPrice] =
    useState("");

  const [categoryId,setCategoryId] =
    useState("");

  async function submit() {

    await fetch(
      "/api/admin/products",
      {

        method:"POST",

        headers:{
          "Content-Type":
          "application/json"
        },

        body: JSON.stringify({

          name,

          price:Number(price),

          categoryId
        })
      }
    );
  }

  return (

    <div className="space-y-4">

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e)=>
          setName(
            e.target.value
          )
        }
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e)=>
          setPrice(
            e.target.value
          )
        }
      />

      <select
        value={categoryId}
        onChange={(e)=>
          setCategoryId(
            e.target.value
          )
        }
      >

        {categories.map((c:any)=> (

          <option
            key={c.id}
            value={c.id}
          >
            {c.name}
          </option>

        ))}

      </select>

      <button
        onClick={submit}
      >
        Save Product
      </button>

    </div>
  );
}
