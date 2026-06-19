import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {

  const password =
    await bcrypt.hash(
      "Admin123!",
      12
    );

  const admin =
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

  const men =
    await prisma.category.upsert({

      where: {
        slug: "men"
      },

      update: {},

      create: {
        name: "Men",
        slug: "men"
      }
    });

  const women =
    await prisma.category.upsert({

      where: {
        slug: "women"
      },

      update: {},

      create: {
        name: "Women",
        slug: "women"
      }
    });

  await prisma.product.createMany({

    data: [

      {
        name: "Premium Polo Shirt",
        slug: "premium-polo-shirt",
        description:
          "Premium cotton polo shirt",
        price: 4500,
        inventory: 50,
        categoryId: men.id,
        createdById: admin.id
      },

      {
        name: "Classic Oxford Shirt",
        slug: "classic-oxford-shirt",
        description:
          "Formal Oxford shirt",
        price: 6000,
        inventory: 40,
        categoryId: men.id,
        createdById: admin.id
      },

      {
        name: "Luxury Pret Dress",
        slug: "luxury-pret-dress",
        description:
          "Luxury women's pret dress",
        price: 12500,
        inventory: 20,
        categoryId: women.id,
        createdById: admin.id
      }
    ],

    skipDuplicates: true
  });

  console.log(
    "Database seeded successfully"
  );
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
