import { prisma }
from "@/lib/prisma";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const cart =
    await prisma.cart.upsert({

      where:{
        userId:
          body.userId
      },

      update:{},

      create:{
        userId:
          body.userId
      }
    });

  return Response.json(cart);
}
