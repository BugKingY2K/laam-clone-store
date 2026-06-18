import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {

  await prisma.product.delete({

    where: {
      id: context.params.id
    }
  });

  return Response.json({
    success: true
  });
}
