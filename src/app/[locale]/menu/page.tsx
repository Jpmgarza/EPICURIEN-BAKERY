import type { Metadata } from "next";
import { MenuContent } from "@/components/sections/menu/MenuContent";

const OG_IMAGE =
  "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/hero-image-goldmarble-croissant.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Our Menu",
    description:
      "Freshly baked croissants, viennoiseries, pains and pâtisseries — handcrafted every morning in W District, Bangkok by award-winning baker Enzo Le Bohec.",
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
      title: "Our Menu | Épicurien French Bakery Bangkok",
      description:
        "Freshly baked croissants, viennoiseries, pains and pâtisseries — handcrafted every morning in W District, Bangkok.",
      url: `https://epicurien-bakery.vercel.app/${locale}/menu`,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Freshly baked artisan croissants at Épicurien French Bakery Bangkok",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Menu | Épicurien French Bakery Bangkok",
      description:
        "Freshly baked croissants, viennoiseries and pâtisseries — handcrafted every morning in Bangkok.",
      images: [OG_IMAGE],
    },
  };
}

export default function MenuPage() {
  return <MenuContent />;
}
