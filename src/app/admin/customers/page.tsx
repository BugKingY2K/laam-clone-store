import DataTable
from "@/components/admin/DataTable";

const customers = [

  {
    name:"Ali Khan",
    email:"ali@test.com"
  },

  {
    name:"Sara Ahmed",
    email:"sara@test.com"
  }
];

export default function CustomersPage() {

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        Customers

      </h1>

      <DataTable

        columns={[

          {
            key:"name",
            label:"Name"
          },

          {
            key:"email",
            label:"Email"
          }
        ]}

        rows={customers}
      />

    </div>
  );
}
