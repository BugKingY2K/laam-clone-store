import { prisma }
from "@/lib/prisma";

import { requireAdmin }
from "@/lib/auth";

export async function POST(
  request: Request
) {

  await requireAdmin();

  const body =
    await request.json();

  const product =
    await prisma.product.create({

      data:{

        name:
          body.name,

        slug:
          body.slug,

        description:
          body.description,

        price:
          body.price,

        inventory:
          body.inventory,

        categoryId:
          body.categoryId
      }
    });

  return Response.json(product);
}
