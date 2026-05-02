import { BASE_URL } from "@/lib/metadata";

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
