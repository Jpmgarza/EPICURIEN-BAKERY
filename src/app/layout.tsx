import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { LangProvider } from "@/lib/lang";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
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

export const metadata: Metadata = {
  title: "Épicurien — French Bakery Bangkok",
  description:
    "Authentic French boulangerie-pâtisserie in Bangkok's W District, founded by Enzo Le Bohec.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${satoshi.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--dominant-brand)]">
        <LangProvider>
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
