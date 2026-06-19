import { prisma }
from "@/lib/prisma";

import {
  deductInventory
}
from "@/lib/inventory";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const order =
    await prisma.order.create({

      data:{

        userId:
          body.userId,

        total:
          body.total,

        items:{

          create:
            body.items.map(
              (item:any)=>({

                productId:
                  item.productId,

                quantity:
                  item.quantity,

                unitPrice:
                  item.unitPrice
              })
            )
        }
      },

      include:{
        items:true
      }
    });

  for (
    const item
    of body.items
  ) {

    await deductInventory(

      item.productId,

      item.quantity
    );
  }

  return Response.json(order);
}
