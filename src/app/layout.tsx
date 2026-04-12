import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Épicurien — French Bakery Bangkok",
  description:
    "Authentic French boulangerie-pâtisserie in Bangkok's W District, founded by Enzo Le Bohec.",
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
      </body>
    </html>
  );
}
