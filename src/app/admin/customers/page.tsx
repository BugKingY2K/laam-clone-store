import { prisma } from "@/lib/prisma";

export default async function CustomersPage() {

  const customers =
    await prisma.user.findMany({

      where:{
        role:"CUSTOMER"
      }
    });

  return (

    <div>

      <h1
        className="
        text-3xl
        font-bold
        mb-6"
      >
        Customers
      </h1>

      {customers.map(customer => (

        <div
          key={customer.id}
          className="
          bg-white
          p-4
          mb-4"
        >

          {customer.firstName}

          {" "}

          {customer.lastName}

        </div>

      ))}

    </div>
  );
}
