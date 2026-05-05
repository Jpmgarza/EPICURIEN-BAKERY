import type { Metadata } from "next";
import { pageMeta, BASE_URL, OG_IMAGE, OG_ALT, hreflangs } from "@/lib/metadata";
import { MenuContent } from "@/components/sections/menu/MenuContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locale as "en" | "fr" | "th");
  const { title, description } = pageMeta.menu[loc] ?? pageMeta.menu.en;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/menu`,
      languages: hreflangs("/menu"),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${BASE_URL}/${locale}/menu`,
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

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Menu", item: `${BASE_URL}/${locale}/menu` },
    ],
  };
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <MenuContent />
    </>
  );
}
