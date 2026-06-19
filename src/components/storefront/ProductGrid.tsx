import ProductCard from "./ProductCard";

export default function ProductGrid({

  products

}: {
  products: any[];
}) {

  return (

    <div
      className="
      grid
      md:grid-cols-4
      gap-6"
    >

      {products.map(product => (

        <ProductCard

          key={product.id}

          product={product}

        />

      ))}

    </div>
  );
}
