"use client";

import Link from "next/link";
import { PageTransition } from "@/components/layout/PageTransition";
import { Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/shared/SocialIcons";
import { useLang } from "@/lib/lang";

export function ContactContent() {
  const { t, locale } = useLang();
  return (
    <PageTransition>
      <section data-nav-color="light" className="bg-[var(--dominant-brand)] min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="w-8 h-px bg-[var(--secondary-brand)] opacity-30 mb-10" />
        <h1 className="font-cormorant font-normal italic text-[var(--secondary-brand)] text-4xl sm:text-5xl md:text-7xl mb-16">
          {t.contact.headline}
        </h1>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <a
            href="https://instagram.com/epicurien.bkk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border border-[var(--secondary-brand)]/10 hover:border-[var(--secondary-brand)]/30 text-[var(--secondary-brand)] transition-all group"
          >
            <InstagramIcon size={16} className="text-[var(--secondary-brand)] opacity-40 shrink-0" />
            <div className="text-left">
              <p className="font-satoshi font-medium text-base opacity-70 group-hover:opacity-100 transition-opacity">
                {t.contact.instagramLabel}
              </p>
              <p className="font-satoshi text-xs opacity-60">{t.contact.instagramHandle}</p>
            </div>
          </a>

          <a
            href="https://facebook.com/share/18WCJuTpEe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border border-[var(--secondary-brand)]/10 hover:border-[var(--secondary-brand)]/30 text-[var(--secondary-brand)] transition-all group"
          >
            <FacebookIcon size={16} className="text-[var(--secondary-brand)] opacity-40 shrink-0" />
            <div className="text-left">
              <p className="font-satoshi font-medium text-base opacity-70 group-hover:opacity-100 transition-opacity">
                {t.contact.facebookLabel}
              </p>
              <p className="font-satoshi text-xs opacity-60">
                {t.contact.facebookHandle}
              </p>
            </div>
          </a>

          <a
            href="tel:+66807912902"
            className="flex items-center gap-4 p-5 border border-[var(--secondary-brand)]/10 hover:border-[var(--secondary-brand)]/30 text-[var(--secondary-brand)] transition-all group"
          >
            <Phone size={16} className="text-[var(--secondary-brand)] opacity-40 shrink-0" />
            <div className="text-left">
              <p className="font-satoshi font-medium text-base opacity-70 group-hover:opacity-100 transition-opacity">
                {t.contact.phoneLabel}
              </p>
              <p className="font-satoshi text-xs opacity-60">{t.visit.phone}</p>
            </div>
          </a>

          <a
            href="mailto:epicurienbkk@gmail.com"
            className="flex items-center gap-4 p-5 border border-[var(--secondary-brand)]/10 hover:border-[var(--secondary-brand)]/30 text-[var(--secondary-brand)] transition-all group"
          >
            <Mail size={16} className="text-[var(--secondary-brand)] opacity-40 shrink-0" />
            <div className="text-left">
              <p className="font-satoshi font-medium text-base opacity-70 group-hover:opacity-100 transition-opacity">
                {t.contact.emailLabel}
              </p>
              <p className="font-satoshi text-xs opacity-60">{t.contact.emailAddress}</p>
            </div>
          </a>
        </div>

        <p className="font-satoshi text-[var(--secondary-brand)] opacity-50 text-[10px] tracking-widest mt-14 max-w-xs leading-relaxed">
          {t.contact.wholesale}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
          <Link
            href={`/${locale}/visit`}
            className="font-satoshi text-[var(--secondary-brand)] text-[10px] tracking-[0.3em] uppercase border-b border-[var(--secondary-brand)]/30 pb-px hover:border-[var(--secondary-brand)] hover:opacity-60 transition-all"
          >
            {t.contact.crossLinkVisit}
          </Link>
          <Link
            href={`/${locale}/menu`}
            className="font-satoshi text-[var(--secondary-brand)] text-[10px] tracking-[0.3em] uppercase border-b border-[var(--secondary-brand)]/30 pb-px hover:border-[var(--secondary-brand)] hover:opacity-60 transition-all"
          >
            {t.contact.crossLinkMenu}
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
