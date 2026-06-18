import { prisma }
from "@/lib/prisma";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const product =
    await prisma.product.create({

      data: {

        name: body.name,

        slug:
          body.name
            .toLowerCase()
            .replaceAll(" ","-"),

        description: "",

        price: body.price,

        categoryId: ""
      }
    });

  return Response.json(product);
}
