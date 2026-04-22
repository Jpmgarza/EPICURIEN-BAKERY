import type { Metadata } from "next";
import { VisitContent } from "@/components/sections/visit/VisitContent";

const OG_IMAGE =
  "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/hero-image-goldmarble-croissant.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Visit Us",
    description:
      "Find Épicurien French Bakery at W District, Bangkok. Open daily 07:00–21:00. Order on Grab or visit us at 1693 Sukhumvit 71, Watthana.",
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
      title: "Visit Us | Épicurien French Bakery Bangkok",
      description:
        "Open daily 07:00–21:00 at W District, 1693 Sukhumvit 71, Bangkok. Order on Grab or come see us.",
      url: `https://epicurien-bakery.vercel.app/${locale}/visit`,
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
      title: "Visit Us | Épicurien French Bakery Bangkok",
      description:
        "Open daily 07:00–21:00 at W District, 1693 Sukhumvit 71, Bangkok.",
      images: [OG_IMAGE],
    },
  };
}

export default function VisitPage() {
  return <VisitContent />;
}
