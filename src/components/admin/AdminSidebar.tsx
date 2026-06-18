import Link from "next/link";

export default function AdminSidebar() {

  const items = [

    {
      label: "Dashboard",
      href: "/admin"
    },

    {
      label: "Products",
      href: "/admin/products"
    },

    {
      label: "Categories",
      href: "/admin/categories"
    },

    {
      label: "Inventory",
      href: "/admin/inventory"
    },

    {
      label: "Orders",
      href: "/admin/orders"
    },

    {
      label: "Customers",
      href: "/admin/customers"
    },

    {
      label: "Analytics",
      href: "/admin/analytics"
    },

    {
      label: "Media",
      href: "/admin/media"
    }
  ];

  return (

    <aside
      className="
      w-64
      border-r
      min-h-screen
      bg-white"
    >

      <div className="p-6">

        <h2 className="text-2xl font-bold">

          Admin

        </h2>

      </div>

      <nav>

        {items.map(item => (

          <Link

            key={item.href}

            href={item.href}

            className="
            block
            px-6
            py-3
            hover:bg-gray-100"
          >

            {item.label}

          </Link>

        ))}

      </nav>

    </aside>
  );
}
