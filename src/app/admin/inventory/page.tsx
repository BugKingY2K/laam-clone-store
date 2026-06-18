import DataTable
from "@/components/admin/DataTable";

const rows = [

  {
    product:
      "Premium Polo Shirt",

    stock: 40
  },

  {
    product:
      "Leather Wallet",

    stock: 22
  }
];

export default function InventoryPage() {

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        Inventory

      </h1>

      <DataTable

        columns={[

          {
            key:"product",
            label:"Product"
          },

          {
            key:"stock",
            label:"Stock"
          }
        ]}

        rows={rows}
      />

    </div>
  );
}
