import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { z } from "zod";

const CategorySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2)
});

export async function POST(
  request: Request
) {
  try {
    await requireAdmin();

    const body = await request.json();

    const validated =
      CategorySchema.parse(body);

    const category =
      await prisma.category.create({
        data: validated
      });

    return Response.json(category);

  } catch (error) {

    return Response.json(
      {
        error: "Failed to create category"
      },
      {
        status: 500
      }
    );
  }
}
