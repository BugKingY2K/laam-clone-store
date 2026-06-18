import HeroSection from "@/components/storefront/HeroSection";
import CategoryGrid from "@/components/storefront/CategoryGrid";
import FeaturedProducts from "@/components/storefront/FeaturedProducts";

export default function HomePage() {

  return (
    <>
      <HeroSection />

      <CategoryGrid />

      <FeaturedProducts />
    </>
  );
}
