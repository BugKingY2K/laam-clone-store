import { prisma } from "./prisma";

export async function deductInventory(
  productId: string,
  quantity: number
) {
  await prisma.product.update({
    where: {
      id: productId
    },
    data: {
      inventory: {
        decrement: quantity
      }
    }
  });
}

export async function addInventory(
  productId: string,
  quantity: number
) {
  await prisma.product.update({
    where: {
      id: productId
    },
    data: {
      inventory: {
        increment: quantity
      }
    }
  });
}
