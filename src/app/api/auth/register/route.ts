import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const passwordHash =
    await bcrypt.hash(
      body.password,
      12
    );

  const user =
    await prisma.user.create({

      data:{

        firstName:
          body.firstName,

        lastName:
          body.lastName,

        email:
          body.email,

        passwordHash
      }
    });

  return Response.json(user);
}
