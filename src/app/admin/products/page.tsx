import Link from "next/link";

export default function ProductsPage() {

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

          Products

        </h1>

        <Link
          href="/admin/products/new"
        >

          New Product

        </Link>

      </div>

      <table
        className="
        w-full
        border"
      >

        <thead>

          <tr>

            <th>Name</th>

            <th>Price</th>

          </tr>

        </thead>

      </table>

    </div>
  );
}
