import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "About",
    description:
      "Meet Enzo Le Bohec, the artisan behind Épicurien French Bakery in Bangkok. Winner of the 1st Best Croissant in Paris 2021, baking fresh every morning at W District.",
    alternates: {
      canonical: `https://epicurien-bakery.vercel.app/${locale}/about`,
      languages: {
        en: "https://epicurien-bakery.vercel.app/en/about",
        fr: "https://epicurien-bakery.vercel.app/fr/about",
        th: "https://epicurien-bakery.vercel.app/th/about",
        "x-default": "https://epicurien-bakery.vercel.app/en/about",
      },
    },
    openGraph: {
      url: `https://epicurien-bakery.vercel.app/${locale}/about`,
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
