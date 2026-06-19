import { prisma }
from "@/lib/prisma";

export default async function OrdersPage() {

  const orders =
    await prisma.order.findMany({

      include:{
        customer:true
      },

      orderBy:{
        createdAt:"desc"
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
        Orders
      </h1>

      {orders.map(order => (

        <div
          key={order.id}
          className="
          bg-white
          p-4
          mb-4"
        >

          <p>

            Order:
            {order.id}

          </p>

          <p>

            Customer:
            {order.customer.email}

          </p>

          <p>

            Status:
            {order.status}

          </p>

        </div>

      ))}

    </div>
  );
}
