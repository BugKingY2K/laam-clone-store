import { prisma } from "@/lib/prisma";

import Link from "next/link";

export default async function CategoriesPage() {

  const categories =
    await prisma.category.findMany();

  return (

    <div className="container-custom py-10">

      <h1
        className="
        text-4xl
        font-bold
        mb-8"
      >

        Categories

      </h1>

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
              p-6
              rounded-xl"
            >

              {category.name}

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}
