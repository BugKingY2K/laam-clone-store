import DataTable
from "@/components/admin/DataTable";

const orders = [

  {
    id:"ORD001",
    total:"PKR 4500",
    status:"Pending"
  },

  {
    id:"ORD002",
    total:"PKR 8000",
    status:"Shipped"
  }
];

export default function OrdersPage() {

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        Orders

      </h1>

      <DataTable

        columns={[

          {
            key:"id",
            label:"Order"
          },

          {
            key:"total",
            label:"Total"
          },

          {
            key:"status",
            label:"Status"
          }
        ]}

        rows={orders}
      />

    </div>
  );
}
