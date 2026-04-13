import type { Metadata } from "next";

const menuItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Épicurien French Bakery — Menu",
  description: "Artisan French pastries, breads, pâtisseries and drinks",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Viennoiseries" },
    { "@type": "ListItem", position: 2, name: "Pains" },
    { "@type": "ListItem", position: 3, name: "Pâtisseries" },
    { "@type": "ListItem", position: 4, name: "Boissons" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "The Menu",
    description:
      "Discover our full menu of authentic French pastries, breads, pâtisseries and drinks. Freshly made daily at Épicurien, W District Bangkok.",
    alternates: {
      canonical: `https://epicurien-bakery.vercel.app/${locale}/menu`,
      languages: {
        en: "https://epicurien-bakery.vercel.app/en/menu",
        fr: "https://epicurien-bakery.vercel.app/fr/menu",
        th: "https://epicurien-bakery.vercel.app/th/menu",
        "x-default": "https://epicurien-bakery.vercel.app/en/menu",
      },
    },
    openGraph: {
      url: `https://epicurien-bakery.vercel.app/${locale}/menu`,
    },
  };
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD: ItemList schema — static structured data, no user input */}
      <script type="application/ld+json">
        {JSON.stringify(menuItemListSchema)}
      </script>
      {children}
    </>
  );
}
