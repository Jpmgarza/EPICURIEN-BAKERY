import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/about/AboutContent";

const OG_IMAGE =
  "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/hero-image-goldmarble-croissant.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Our Story",
    description:
      "Meet Enzo Le Bohec — N.1 Best Croissant in Paris 2021 — and discover how Épicurien brings authentic French bakery craft to Bangkok's W District.",
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
      title: "Our Story | Épicurien French Bakery Bangkok",
      description:
        "Meet Enzo Le Bohec — N.1 Best Croissant in Paris 2021 — and discover how Épicurien brings authentic French bakery craft to Bangkok.",
      url: `https://epicurien-bakery.vercel.app/${locale}/about`,
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
      title: "Our Story | Épicurien French Bakery Bangkok",
      description:
        "Meet Enzo Le Bohec — N.1 Best Croissant in Paris 2021 — and the story behind Épicurien in Bangkok.",
      images: [OG_IMAGE],
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
