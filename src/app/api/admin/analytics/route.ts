import { prisma }
from "@/lib/prisma";

import { requireAdmin }
from "@/lib/auth";

export async function GET() {

  await requireAdmin();

  const products =
    await prisma.product.count();

  const customers =
    await prisma.user.count();

  const orders =
    await prisma.order.count();

  const revenue =
    await prisma.order.aggregate({

      _sum:{
        total:true
      }
    });

  return Response.json({

    products,

    customers,

    orders,

    revenue:
      revenue._sum.total || 0
  });
}
