import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const item =
    await prisma.cartItem.create({

      data:{

        cartId:
          body.cartId,

        productId:
          body.productId,

        quantity:
          body.quantity
      }
    });

  return Response.json(item);
}
