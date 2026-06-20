import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { z } from "zod";

const CategorySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2)
});

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {

    await requireAdmin();

    const body =
      await request.json();

    const validated =
      CategorySchema.parse(body);

    return Response.json(
      await prisma.category.update({
        where: {
          id: params.id
        },
        data: validated
      })
    );

  } catch {

    return Response.json(
      {
        error: "Update failed"
      },
      {
        status: 500
      }
    );
  }
}
