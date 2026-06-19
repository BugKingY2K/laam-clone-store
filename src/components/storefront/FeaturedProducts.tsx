import ProductGrid
from "./ProductGrid";

export default function FeaturedProducts({

  products

}: {
  products:any[];
}) {

  return (

    <section
      className="
      container-custom
      py-16"
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-8"
      >

        Featured Products

      </h2>

      <ProductGrid
        products={products}
      />

    </section>
  );
}
