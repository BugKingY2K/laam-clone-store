import { prisma }
from "@/lib/prisma";

export default async function AnalyticsPage() {

  const orders =
    await prisma.order.count();

  const products =
    await prisma.product.count();

  const customers =
    await prisma.user.count();

  return (

    <div>

      <h1
        className="
        text-3xl
        font-bold
        mb-8"
      >

        Analytics

      </h1>

      <div
        className="
        grid
        md:grid-cols-3
        gap-6"
      >

        <div className="bg-white p-6">
          Orders: {orders}
        </div>

        <div className="bg-white p-6">
          Products: {products}
        </div>

        <div className="bg-white p-6">
          Customers: {customers}
        </div>

      </div>

    </div>
  );
}
