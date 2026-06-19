import { prisma }
from "@/lib/prisma";

export default async function CategoriesPage() {

  const categories =
    await prisma.category.findMany();

  return (

    <div>

      <h1
        className="
        text-3xl
        font-bold
        mb-8"
      >
        Categories
      </h1>

      {categories.map(category => (

        <div
          key={category.id}
          className="
          bg-white
          p-4
          mb-3"
        >

          {category.name}

        </div>

      ))}

    </div>
  );
}
