import type { Metadata } from "next";
import { pageMeta, BASE_URL, OG_IMAGE, OG_ALT, hreflangs } from "@/lib/metadata";
import { AboutContent } from "@/components/sections/about/AboutContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locale as "en" | "fr" | "th");
  const { title, description } = pageMeta.about[loc] ?? pageMeta.about.en;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/about`,
      languages: hreflangs("/about"),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${BASE_URL}/${locale}/about`,
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enzo Le Bohec",
  jobTitle: "Chef & Founder",
  worksFor: {
    "@type": "Bakery",
    name: "Épicurien French Bakery",
    url: BASE_URL,
  },
  award: "1st Best Croissant in Paris 2021",
  nationality: "French",
};

export default async function AboutPage({
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
      { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/${locale}/about` },
    ],
  };
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <AboutContent />
    </>
  );
}
