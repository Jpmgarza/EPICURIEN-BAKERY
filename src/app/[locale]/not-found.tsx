"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

export default function LocaleNotFound() {
  const { locale } = useLang();

  return (
    <main
      data-nav-color="dark"
      className="bg-[var(--secondary-brand)] min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="w-8 h-px bg-[var(--accent-brand)] opacity-30 mb-8" />
      <p className="font-satoshi text-[var(--dominant-brand)] opacity-40 text-[10px] tracking-[0.3em] uppercase mb-6">
        404
      </p>
      <h1 className="font-cormorant font-normal italic text-[var(--dominant-brand)] text-4xl sm:text-5xl md:text-7xl mb-8">
        Page not found.
      </h1>
      <p className="font-satoshi text-[var(--dominant-brand)] opacity-50 text-sm mb-12 max-w-sm leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href={`/${locale}`}
        className="font-satoshi text-[10px] tracking-[0.2em] uppercase text-[var(--dominant-brand)] opacity-60 hover:opacity-100 transition-opacity border-b border-current pb-px"
      >
        Return to home
      </Link>
    </main>
  );
}
