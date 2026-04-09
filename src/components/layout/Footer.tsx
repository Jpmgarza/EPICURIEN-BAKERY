"use client";

import Link from "next/link";
import { InstagramIcon, FacebookIcon } from "@/components/shared/SocialIcons";
import { useLang } from "@/lib/lang";

export function Footer() {
  const { t } = useLang();

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
                French Bakery
              </span>
            </div>
            <p className="font-satoshi text-[var(--dominant-brand)] opacity-50 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Col 2: Nav + social */}
          <div>
            <p className="font-satoshi text-[var(--accent-brand)] text-[9px] tracking-[0.3em] uppercase mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                { href: "/", label: t.nav.home },
                { href: "/menu", label: t.nav.menu },
                { href: "/about", label: t.nav.about },
                { href: "/visit", label: t.nav.visit },
                { href: "/contact", label: t.nav.contact },
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
                className="text-[var(--dominant-brand)] opacity-40 hover:opacity-100 hover:text-[var(--accent-brand)] transition-all"
                aria-label="Instagram @epicurien.bkk"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://facebook.com/share/18WCJuTpEe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--dominant-brand)] opacity-40 hover:opacity-100 hover:text-[var(--accent-brand)] transition-all"
                aria-label="Facebook Épicurien"
              >
                <FacebookIcon size={17} />
              </a>
            </div>
          </div>

          {/* Col 3: Address + hours + phone */}
          <div>
            <p className="font-satoshi text-[var(--accent-brand)] text-[9px] tracking-[0.3em] uppercase mb-5">
              Nous Trouver
            </p>
            <div className="flex flex-col gap-2.5 font-satoshi text-sm text-[var(--dominant-brand)] opacity-50">
              <p>{t.visit.address}</p>
              <p>{t.visit.hours}</p>
              <p>{t.visit.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--divider)] px-6 py-5 pb-24 md:pb-5">
        <p className="text-center font-satoshi text-[10px] text-[var(--dominant-brand)] opacity-30 tracking-widest">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
