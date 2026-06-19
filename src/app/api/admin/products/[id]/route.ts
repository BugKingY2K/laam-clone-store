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

  const product =
    await prisma.product.update({

      where:{
        id:params.id
      },

      data:body
    });

  return Response.json(product);
}

export async function DELETE(
  request: Request,
  { params }: any
) {

  await requireAdmin();

  await prisma.product.delete({

    where:{
      id:params.id
    }
  });

  return Response.json({
    success:true
  });
}
