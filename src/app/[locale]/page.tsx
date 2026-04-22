import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/shared/TrustBar";
import { FeaturedProducts } from "@/components/sections/home/FeaturedProducts";
import { MidPageCTA } from "@/components/sections/home/MidPageCTA";
import { StoryTeaser } from "@/components/sections/home/StoryTeaser";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { InstagramStrip } from "@/components/sections/home/InstagramStrip";
import { BottomCTA } from "@/components/sections/home/BottomCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: {
      absolute:
        "Épicurien French Bakery Bangkok | Artisan Croissants & Pastries",
    },
    description:
      "Award-winning French bakery in W District, Bangkok. Freshly baked croissants, pastries and cakes every morning by Enzo Le Bohec. Order on Grab.",
    alternates: {
      canonical: `https://epicurien-bakery.vercel.app/${locale}`,
      languages: {
        en: "https://epicurien-bakery.vercel.app/en",
        fr: "https://epicurien-bakery.vercel.app/fr",
        th: "https://epicurien-bakery.vercel.app/th",
        "x-default": "https://epicurien-bakery.vercel.app/en",
      },
    },
    openGraph: {
      url: `https://epicurien-bakery.vercel.app/${locale}`,
    },
  };
}

const bakerySchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Épicurien French Bakery",
  description:
    "Award-winning artisan French bakery by Enzo Le Bohec, W District Bangkok",
  url: "https://epicurien-bakery.vercel.app",
  telephone: "+66807912902",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1693 Sukhumvit 71",
    addressLocality: "Bangkok",
    addressRegion: "Watthana",
    postalCode: "10110",
    addressCountry: "TH",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "21:00",
  },
  servesCuisine: "French",
  priceRange: "$$",
  image:
    "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/hero-image-goldmarble-croissant.png",
  award: "1st Best Croissant in Paris 2021",
  founder: {
    "@type": "Person",
    name: "Enzo Le Bohec",
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      {/* JSON-LD: LocalBusiness schema — static structured data, no user input */}
      <script type="application/ld+json">
        {JSON.stringify(bakerySchema)}
      </script>
      <main>
        <Hero />
        <TrustBar />
        <FeaturedProducts />
        <MidPageCTA />
        <StoryTeaser />
        <TestimonialsSection variant="light" />
        <InstagramStrip locale={locale} />
        <BottomCTA />
      </main>
    </>
  );
}
