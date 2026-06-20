import { prisma } from "@/lib/prisma";

import ProductGrid from "@/components/storefront/ProductGrid";

type Props = {

  params: {

    slug: string;
  };
};

export default async function CategoryPage({
  params
}: Props) {

  const category =
    await prisma.category.findUnique({

      where: {
        slug: params.slug
      },

      include: {
        products: true
      }
    });

  if (!category) {

    return <div>Category Not Found</div>;
  }

  return (

    <div className="container-custom py-10">

      <h1
        className="
        text-4xl
        font-bold
        mb-8"
      >

        {category.name}

      </h1>

      <ProductGrid
        products={category.products}
      />

    </div>
  );
}
