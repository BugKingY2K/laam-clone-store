import { prisma }
from "@/lib/prisma";

import { requireAdmin }
from "@/lib/auth";

import { z } from "zod";

const ProductSchema = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),
  description: z.string().min(10),
  price: z.number().positive(),
  inventory: z.number().int(),
  categoryId: z.string()
});

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
