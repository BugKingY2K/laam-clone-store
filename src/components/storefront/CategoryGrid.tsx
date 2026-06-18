const categories = [

  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
  },

  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
  },

  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
  },

  {
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }

];

export default function CategoryGrid() {

  return (

    <section className="container-custom py-16">

      <h2 className="text-3xl font-bold mb-8">

        Shop By Category

      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {categories.map(category => (

          <div
            key={category.name}
            className="rounded-xl overflow-hidden"
          >

            <img
              src={category.image}
              alt={category.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold">

                {category.name}

              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
