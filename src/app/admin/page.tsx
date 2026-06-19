import { prisma }
from "@/lib/prisma";

import AdminStats
from "@/components/admin/AdminStats";

export default async function Dashboard() {

  const products =
    await prisma.product.count();

  const orders =
    await prisma.order.count();

  const customers =
    await prisma.user.count({

      where:{
        role:"CUSTOMER"
      }
    });

  const revenue =
    await prisma.order.aggregate({

      _sum:{
        total:true
      }
    });

  return (

    <AdminStats

      products={products}

      orders={orders}

      customers={customers}

      revenue={
        revenue._sum.total || 0
      }

    />

  );
}
