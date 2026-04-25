"use client";

import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, FacebookIcon } from "@/components/shared/SocialIcons";
import { useLang } from "@/lib/lang";

export function Footer() {
  const { t, locale } = useLang();

  return (
    <footer className="bg-[var(--secondary-brand)] border-t border-[var(--divider)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-cormorant text-[var(--dominant-brand)] text-2xl tracking-[0.15em]">
                ÉPICURIEN
              </span>
              <span className="font-satoshi text-[var(--accent-brand)] text-[8px] tracking-[0.35em] uppercase mt-1">
                {t.nav.brandSub}
              </span>
            </div>

            <div className="mt-6 inline-block bg-[var(--dominant-brand)]">
              <Image
                src="https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/Epicurien-logo/footer-logo.png"
                alt="Épicurien French Bakery logo"
                width={300}
                height={300}
                quality={85}
                sizes="(max-width: 640px) 120px, 160px"
                className="w-[120px] sm:w-[160px] h-auto opacity-80"
              />
            </div>
          </div>

          {/* Col 2: Nav + social */}
          <div>
            <p className="font-satoshi text-[var(--footer-muted)] text-[9px] tracking-[0.3em] uppercase mb-5">
              {t.nav.footerHeading}
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                { href: `/${locale}`, label: t.nav.home },
                { href: `/${locale}/menu`, label: t.nav.menu },
                { href: `/${locale}/about`, label: t.nav.about },
                { href: `/${locale}/visit`, label: t.nav.visit },
                { href: `/${locale}/contact`, label: t.nav.contact },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-satoshi text-[var(--dominant-brand)] opacity-50 hover:opacity-100 text-sm transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/epicurien.bkk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--dominant-brand)] opacity-40 hover:opacity-100 transition-all"
                aria-label={t.footer.instagramAriaLabel}
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://facebook.com/share/18WCJuTpEe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--dominant-brand)] opacity-40 hover:opacity-100 transition-all"
                aria-label={t.footer.facebookAriaLabel}
              >
                <FacebookIcon size={17} />
              </a>
            </div>
          </div>

          {/* Col 3: Address + hours + phone */}
          <div>
            <p className="font-satoshi text-[var(--footer-muted)] text-[9px] tracking-[0.3em] uppercase mb-5">
              {t.visit.headline}
            </p>
            <div className="flex flex-col gap-2.5 font-satoshi text-sm text-[var(--dominant-brand)] opacity-50">
              <p>{t.visit.address}</p>
              <p>{t.visit.hours}</p>
              <a
                href="tel:+66807912902"
                className="hover:opacity-100 transition-opacity"
              >
                {t.visit.phone}
              </a>
              <a
                href="mailto:epicurienbkk@gmail.com"
                className="hover:opacity-100 transition-opacity"
              >
                epicurienbkk@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--divider)] px-6 py-5 pb-24 md:pb-5">
        <p className="text-center font-satoshi text-[10px] text-[var(--footer-muted)] tracking-widest">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
