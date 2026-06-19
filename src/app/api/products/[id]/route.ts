import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: {
    params: {
      id:string
    }
  }
) {

  const product =
    await prisma.product.findUnique({

      where:{
        id:params.id
      },

      include:{
        category:true,
        images:true,
        variants:true
      }
    });

  return Response.json(product);
}
