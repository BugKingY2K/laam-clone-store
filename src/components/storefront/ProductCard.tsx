import Link from "next/link";

type Props = {

  product: {

    id: string;

    name: string;

    slug: string;

    price: number;
  };
};

export default function ProductCard({
  product
}: Props) {

  return (

    <Link
      href={`/products/${product.slug}`}
    >

      <div
        className="
        border
        rounded-xl
        overflow-hidden
        hover:shadow-lg"
      >

        <div
          className="
          h-72
          bg-gray-100"
        />

        <div className="p-4">

          <h3 className="font-semibold">

            {product.name}

          </h3>

          <p className="mt-2">

            PKR

            {" "}

            {product.price.toLocaleString()}

          </p>

        </div>

      </div>

    </Link>
  );
}
