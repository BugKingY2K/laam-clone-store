import Link from "next/link";

export default function CategoryGrid({

  categories

}: {
  categories:any[];
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

        Categories

      </h2>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6"
      >

        {categories.map(category => (

          <Link

            key={category.id}

            href={
              `/categories/${category.slug}`
            }

          >

            <div
              className="
              border
              rounded-xl
              p-6"
            >

              {category.name}

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}
