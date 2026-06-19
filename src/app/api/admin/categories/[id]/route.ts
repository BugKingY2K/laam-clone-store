import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

type Context = {
  params: {
    id: string;
  };
};

export async function GET(
  request: Request,
  { params }: Context
) {
  await requireAdmin();

  const category =
    await prisma.category.findUnique({
      where: {
        id: params.id
      }
    });

  if (!category) {
    return Response.json(
      { error: "Category not found" },
      { status: 404 }
    );
  }

  return Response.json(category);
}

export async function PUT(
  request: Request,
  { params }: Context
) {
  await requireAdmin();

  const body =
    await request.json();

  const category =
    await prisma.category.update({
      where: {
        id: params.id
      },
      data: {
        name: body.name,
        slug: body.slug,
        image: body.image
      }
    });

  return Response.json(category);
}

export async function DELETE(
  request: Request,
  { params }: Context
) {
  await requireAdmin();

  await prisma.category.delete({
    where: {
      id: params.id
    }
  });

  return Response.json({
    success: true
  });
}
