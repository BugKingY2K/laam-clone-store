import { prisma } from "@/lib/prisma";

import HeroSection from "@/components/storefront/HeroSection";

import FeaturedProducts from "@/components/storefront/FeaturedProducts";

import CategoryGrid from "@/components/storefront/CategoryGrid";

export default async function HomePage() {

  const categories =
    await prisma.category.findMany();

  const featuredProducts =
    await prisma.product.findMany({

      where: {
        featured: true
      },

      take: 8
    });

  return (

    <>

      <HeroSection />

      <CategoryGrid
        categories={categories}
      />

      <FeaturedProducts
        products={featuredProducts}
      />

    </>

  );
}
