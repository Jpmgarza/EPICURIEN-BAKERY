import type { Metadata, Viewport } from "next";
import { pageMeta, BASE_URL, OG_IMAGE as ROOT_OG_IMAGE, OG_ALT, hreflangs } from "@/lib/metadata";
import { Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { LangProvider, type Locale } from "@/lib/lang";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ICON_BASE =
  "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/favicon%20logo";
const FAVICON_FILES =
  "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/favicon%20logo";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Épicurien French Bakery",
  url: BASE_URL,
};

const VALID_LOCALES: Locale[] = ["en", "fr", "th"];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "th" }];
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locale as "en" | "fr" | "th");
  const { title, description } = pageMeta.home[loc] ?? pageMeta.home.en;
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: `%s | Épicurien — French Bakery Bangkok`,
    },
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: hreflangs(""),
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${BASE_URL}/${locale}`,
      siteName: "Épicurien French Bakery Bangkok",
      title,
      description,
      images: [{ url: ROOT_OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ROOT_OG_IMAGE],
    },
    icons: {
      icon: [
        { url: `${ICON_BASE}/favicon.ico`, type: "image/x-icon" },
        { url: `${ICON_BASE}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
        { url: `${ICON_BASE}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
        { url: `${ICON_BASE}/android-icon-192x192.png`, sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: `${ICON_BASE}/apple-icon-180x180.png`, sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: `${FAVICON_FILES}/manifest.json`,
    other: {
      "msapplication-TileColor": "#ffffff",
      "msapplication-TileImage": `${ICON_BASE}/ms-icon-144x144.png`,
      "msapplication-config": `${FAVICON_FILES}/browserconfig.xml`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = VALID_LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : "en";

  return (
    <html
      lang={safeLocale}
      className={`${cormorant.variable} ${satoshi.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--dominant-brand)]" suppressHydrationWarning>
        {/* JSON-LD: WebSite schema — static structured data, no user input */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <LangProvider initialLocale={safeLocale}>
          <LoadingScreen />
          <div id="main-content">
            <NavBar />
            {children}
            <Footer />
            <MobileStickyBar />
          </div>
        </LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
