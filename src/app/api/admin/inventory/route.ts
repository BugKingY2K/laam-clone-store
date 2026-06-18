import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  await prisma.inventoryLog.create({

    data: {

      productId:
        body.productId,

      quantity:
        body.quantity,

      reason:
        body.reason
    }
  });

  await prisma.product.update({

    where: {
      id: body.productId
    },

    data: {

      inventory: {

        increment:
          body.quantity
      }
    }
  });

  return Response.json({
    success: true
  });
}
