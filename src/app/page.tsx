import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/shared/TrustBar";
import { FeaturedProducts } from "@/components/sections/home/FeaturedProducts";
import { MidPageCTA } from "@/components/sections/home/MidPageCTA";
import { StoryTeaser } from "@/components/sections/home/StoryTeaser";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { InstagramStrip } from "@/components/sections/home/InstagramStrip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <MidPageCTA />
      <StoryTeaser />
      <TestimonialsSection variant="dark" />
      <InstagramStrip />
    </main>
  );
}
