import { prisma } from "@/lib/prisma";

import AddToCartButton
from "@/components/storefront/AddToCartButton";

type Props = {

  params: {

    slug: string;
  };
};

export default async function ProductPage({
  params
}: Props) {

  const product =
    await prisma.product.findUnique({

      where: {
        slug: params.slug
      },

      include: {

        images: true,

        variants: true
      }
    });

  if (!product) {

    return <div>Not Found</div>;
  }

  return (

    <div className="container-custom py-10">

      <div
        className="
        grid
        md:grid-cols-2
        gap-10"
      >

        <div>

          <div
            className="
            h-[500px]
            bg-gray-100
            rounded-xl"
          />

        </div>

        <div>

          <h1
            className="
            text-4xl
            font-bold"
          >

            {product.name}

          </h1>

          <p className="mt-4">

            PKR

            {" "}

            {product.price.toLocaleString()}

          </p>

          <p className="mt-6">

            {product.description}

          </p>

          <div className="mt-8">

            <AddToCartButton

              productId={product.id}

              name={product.name}

              price={product.price}

            />

          </div>

        </div>

      </div>

    </div>
  );
}
