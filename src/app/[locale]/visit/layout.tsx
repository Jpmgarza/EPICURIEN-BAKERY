import type { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Visit Us",
    description:
      "Find Épicurien French Bakery at W District, Bangkok. Open daily 7am–9pm. BTS Phra Khanong — 3-minute walk. Order on Grab for delivery.",
    alternates: {
      canonical: `https://epicurien-bakery.vercel.app/${locale}/visit`,
      languages: {
        en: "https://epicurien-bakery.vercel.app/en/visit",
        fr: "https://epicurien-bakery.vercel.app/fr/visit",
        th: "https://epicurien-bakery.vercel.app/th/visit",
        "x-default": "https://epicurien-bakery.vercel.app/en/visit",
      },
    },
    openGraph: {
      url: `https://epicurien-bakery.vercel.app/${locale}/visit`,
    },
  };
}

export default function VisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD: LocalBusiness schema — static structured data, no user input */}
      <script type="application/ld+json">
        {JSON.stringify(bakerySchema)}
      </script>
      {children}
    </>
  );
}
