import { prisma } from "@/lib/prisma";

type Props = {

  searchParams: {

    q?: string;
  };
};

export default async function SearchPage({
  searchParams
}: Props) {

  const query =
    searchParams.q ?? "";

  const products =
    await prisma.product.findMany({

      where: {

        name: {

          contains: query,

          mode: "insensitive"
        }
      }
    });

  return (

    <div className="container-custom py-10">

      <h1
        className="
        text-3xl
        font-bold
        mb-6"
      >

        Search Results

      </h1>

      <p className="mb-6">

        {products.length}

        {" "}

        products found

      </p>

      <ProductGrid
        products={products}
      />

    </div>
  );
}
