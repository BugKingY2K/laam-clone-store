import { prisma }
from "@/lib/prisma";

import Link from "next/link";

export default async function ProductsPage() {

  const products =
    await prisma.product.findMany({

      include:{
        category:true
      },

      orderBy:{
        createdAt:"desc"
      }
    });

  return (

    <div>

      <div
        className="
        flex
        justify-between
        mb-8"
      >

        <h1
          className="
          text-3xl
          font-bold"
        >
          Products
        </h1>

        <Link
          href="/admin/products/new"
        >
          Add Product
        </Link>

      </div>

      <table className="w-full">

        <thead>

          <tr>

            <th>Name</th>

            <th>Category</th>

            <th>Price</th>

            <th>Stock</th>

          </tr>

        </thead>

        <tbody>

          {products.map(product => (

            <tr key={product.id}>

              <td>
                {product.name}
              </td>

              <td>
                {product.category.name}
              </td>

              <td>
                {product.price}
              </td>

              <td>
                {product.inventory}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
