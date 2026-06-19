import Link from "next/link";

export default function AdminSidebar() {

  return (

    <aside
      className="
      w-72
      bg-white
      border-r"
    >

      <div className="p-6">

        <h2
          className="
          text-2xl
          font-bold"
        >
          Admin
        </h2>

      </div>

      <nav className="space-y-2 p-4">

        <Link href="/admin">
          Dashboard
        </Link>

        <Link href="/admin/products">
          Products
        </Link>

        <Link href="/admin/categories">
          Categories
        </Link>

        <Link href="/admin/inventory">
          Inventory
        </Link>

        <Link href="/admin/orders">
          Orders
        </Link>

        <Link href="/admin/customers">
          Customers
        </Link>

        <Link href="/admin/analytics">
          Analytics
        </Link>

      </nav>

    </aside>
  );
}
