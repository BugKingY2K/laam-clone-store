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

  const category =
    await prisma.category.create({

      data:{

        name:
          body.name,

        slug:
          body.slug
      }
    });

  return Response.json(category);
}
