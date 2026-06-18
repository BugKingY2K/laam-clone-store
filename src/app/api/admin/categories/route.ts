import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const category =
    await prisma.category.create({

      data: {

        name: body.name,

        slug:
          body.name
            .toLowerCase()
            .replaceAll(" ","-")
      }
    });

  return Response.json(category);
}
