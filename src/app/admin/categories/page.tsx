import Link from "next/link";

export default function CategoriesPage() {

  return (

    <div>

      <div
        className="
        flex
        justify-between
        mb-6"
      >

        <h1
          className="
          text-3xl
          font-bold"
        >

          Categories

        </h1>

        <Link
          href="/admin/categories/new"
        >

          New Category

        </Link>

      </div>

    </div>
  );
}
