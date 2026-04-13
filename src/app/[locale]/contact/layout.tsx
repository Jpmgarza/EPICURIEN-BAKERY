import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Contact",
    description:
      "Contact Épicurien French Bakery in Bangkok. Follow us on Instagram @epicurien.bkk, find us on Facebook, or call +66 80 791 2902.",
    alternates: {
      canonical: `https://epicurien-bakery.vercel.app/${locale}/contact`,
      languages: {
        en: "https://epicurien-bakery.vercel.app/en/contact",
        fr: "https://epicurien-bakery.vercel.app/fr/contact",
        th: "https://epicurien-bakery.vercel.app/th/contact",
        "x-default": "https://epicurien-bakery.vercel.app/en/contact",
      },
    },
    openGraph: {
      url: `https://epicurien-bakery.vercel.app/${locale}/contact`,
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
