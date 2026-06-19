import { prisma } from "@/lib/prisma";

import ProductGrid
from "@/components/storefront/ProductGrid";

export default async function ProductsPage() {

  const products =
    await prisma.product.findMany({

      where: {
        published: true
      },

      orderBy: {
        createdAt: "desc"
      }
    });

  return (

    <div className="container-custom py-10">

      <h1
        className="
        text-4xl
        font-bold
        mb-8"
      >

        All Products

      </h1>

      <ProductGrid
        products={products}
      />

    </div>
  );
}
