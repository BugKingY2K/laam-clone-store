import { prisma }
from "@/lib/prisma";

export async function
deductInventory(

  productId: string,

  quantity: number
) {

  await prisma.product.update({

    where: {
      id: productId
    },

    data: {

      inventory: {

        decrement:
          quantity
      }
    }
  });
}
