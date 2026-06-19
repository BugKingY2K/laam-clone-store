import { prisma }
from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: any
) {

  const order =
    await prisma.order.findUnique({

      where:{
        id:params.id
      },

      include:{

        items:true,

        payment:true
      }
    });

  return Response.json(order);
}
