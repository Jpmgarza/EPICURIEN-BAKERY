import type { Metadata } from "next";
import { pageMeta, BASE_URL, OG_IMAGE, OG_ALT, hreflangs } from "@/lib/metadata";
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
  const loc = (locale as "en" | "fr" | "th");
  const { title, description } = pageMeta.home[loc] ?? pageMeta.home.en;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: hreflangs(""),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

const bakerySchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Épicurien French Bakery",
  description:
    "Award-winning artisan French bakery by Enzo Le Bohec, W District Bangkok",
  url: BASE_URL,
  telephone: "+66807912902",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1693 Sukhumvit 71",
    addressLocality: "Bangkok",
    addressRegion: "Watthana",
    postalCode: "10110",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.7142476,
    longitude: 100.5933191,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "239",
    bestRating: "5",
    worstRating: "1",
  },
  menu: `${BASE_URL}/en/menu`,
  hasMap: "https://maps.app.goo.gl/mRJsESrH4KEqCGJ9A",
  sameAs: [
    "https://instagram.com/epicurien.bkk",
    "https://facebook.com/share/18WCJuTpEe/",
  ],
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
