import { prisma } from "@/lib/prisma";

type Props = {

  params: {
    id: string;
  };
};

export default async function EditProductPage({
  params
}: Props) {

  const product =
    await prisma.product.findUnique({

      where: {
        id: params.id
      }
    });

  if (!product) {

    return <div>Not Found</div>;
  }

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        Edit Product

      </h1>

      <div className="space-y-4">

        <p>{product.name}</p>

        <p>PKR {product.price}</p>

      </div>

    </div>
  );
}
