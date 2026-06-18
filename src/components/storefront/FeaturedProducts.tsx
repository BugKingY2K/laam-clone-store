import ProductCard from "./ProductCard";

const products = [

  {
    title: "Premium Polo Shirt",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },

  {
    title: "Luxury Pret Dress",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
  },

  {
    title: "Leather Wallet",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93"
  },

  {
    title: "Leather Loafers",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }

];

export default function FeaturedProducts() {

  return (

    <section className="container-custom py-16">

      <h2 className="text-3xl font-bold mb-8">

        Featured Products

      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {products.map(product => (

          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            image={product.image}
          />

        ))}

      </div>

    </section>
  );
}
