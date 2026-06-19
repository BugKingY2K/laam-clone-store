import { prisma }
from "@/lib/prisma";

import { requireAdmin }
from "@/lib/auth";

export async function PUT(
  request: Request,
  { params }: any
) {

  await requireAdmin();

  const body =
    await request.json();

  const order =
    await prisma.order.update({

      where:{
        id:params.id
      },

      data:{

        status:
          body.status
      }
    });

  return Response.json(order);
}
