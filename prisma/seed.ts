import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {

  const password =
    await bcrypt.hash(
      "Admin123!",
      12
    );

  await prisma.user.upsert({

    where: {
      email: "admin@yourstore.com"
    },

    update: {},

    create: {

      firstName: "Store",

      lastName: "Admin",

      email: "admin@yourstore.com",

      passwordHash: password,

      role: "ADMIN"
    }
  });

  console.log("Admin Created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
