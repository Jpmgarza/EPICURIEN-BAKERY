import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact/ContactContent";

const OG_IMAGE =
  "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/hero-image-goldmarble-croissant.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Contact",
    description:
      "Connect with Épicurien French Bakery Bangkok on Instagram, Facebook, or by phone. Find us at W District, 1693 Sukhumvit 71.",
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
      title: "Contact | Épicurien French Bakery Bangkok",
      description:
        "Connect with us on Instagram, Facebook, or call us directly. W District, Bangkok.",
      url: `https://epicurien-bakery.vercel.app/${locale}/contact`,
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
      title: "Contact | Épicurien French Bakery Bangkok",
      description:
        "Connect with us on Instagram, Facebook, or call us directly. W District, Bangkok.",
      images: [OG_IMAGE],
    },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
