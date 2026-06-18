import { prisma }
from "@/lib/prisma";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const order =
    await prisma.order.create({

      data: {

        userId:
          body.userId,

        total:
          body.total,

        items: {

          create:
            body.items.map(
              (item:any)=>({

                productId:
                  item.productId,

                quantity:
                  item.quantity,

                unitPrice:
                  item.price
              })
            )
        }
      }
    });

  return Response.json(order);
}
