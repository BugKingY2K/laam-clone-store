import { auth }
from "@/auth";

import { prisma }
from "@/lib/prisma";

export default async function OrdersPage() {

  const session =
    await auth();

  const orders =
    await prisma.order.findMany({

      where: {

        userId:
          session?.user?.id
      }
    });

  return (

    <div className="container-custom py-10">

      <h1 className="text-3xl font-bold mb-6">

        Order History

      </h1>

      {orders.map(order => (

        <div
          key={order.id}
          className="border p-4 mb-3"
        >

          <p>
            Order #{order.id}
          </p>

          <p>
            $ {order.total}
          </p>

          <p>
            {order.status}
          </p>

        </div>

      ))}

    </div>
  );
}
