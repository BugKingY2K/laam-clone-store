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

const men =
await prisma.category.create({

  data: {

    name:"Men",

    slug:"men"
  }
});

await prisma.product.createMany({

  data:[

    {
      name:"Premium Polo Shirt",
      slug:"premium-polo-shirt",
      description:"Premium Cotton",
      price:4500,
      inventory:50,
      categoryId:men.id
    },

    {
      name:"Classic Oxford Shirt",
      slug:"classic-oxford-shirt",
      description:"Formal Wear",
      price:6000,
      inventory:40,
      categoryId:men.id
    }
  ]
});


main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
