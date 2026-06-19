import { prisma } from "@/lib/prisma";

export async function GET() {

  const products =
    await prisma.product.findMany({

      where:{
        published:true
      },

      include:{
        category:true,
        images:true
      }
    });

  return Response.json(products);
}
