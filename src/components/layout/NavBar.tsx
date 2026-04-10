"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Bike } from "lucide-react";
import { useLang } from "@/lib/lang";

const GRAB_URL = "https://food.grab.com/th/en/";

function NavLink({
  href,
  label,
  transparent,
}: {
  href: string;
  label: string;
  transparent: boolean;
}) {
  return (
    <motion.div
      className="relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Link
        href={href}
        className={`font-satoshi text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-all duration-300 ${
          transparent ? "text-white" : "text-[var(--secondary-brand)]"
        }`}
      >
        {label}
      </Link>
      <motion.span
        className="absolute -bottom-0.5 left-0 h-px w-full bg-[var(--accent-brand)] origin-left block"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export function NavBar() {
  const { locale, setLocale, t } = useLang();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    // Sync with current scroll position immediately
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/menu", label: t.nav.menu },
    { href: "/about", label: t.nav.about },
    { href: "/visit", label: t.nav.visit },
  ];

  const textColor = transparent
    ? "text-white"
    : "text-[var(--secondary-brand)]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-[var(--dominant-brand)]/95 backdrop-blur-md border-b border-[var(--secondary-brand)]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-cormorant text-lg tracking-[0.15em] group-hover:text-[var(--accent-brand)] transition-all duration-300 ${textColor}`}
            >
              ÉPICURIEN
            </span>
            <span
              className={`font-satoshi text-[8px] tracking-[0.35em] uppercase mt-0.5 opacity-60 transition-all duration-300 ${textColor}`}
            >
              {t.nav.brandSub}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} transparent={transparent} />
            ))}
          </div>

          {/* Right: Lang Toggle + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-0.5 font-satoshi text-[10px] tracking-widest">
              {(["fr", "en", "th"] as const).map((loc, i) => (
                <span key={loc} className="flex items-center">
                  {i > 0 && (
                    <span
                      className={`opacity-20 px-1 transition-all duration-300 ${textColor}`}
                    >
                      |
                    </span>
                  )}
                  <button
                    onClick={() => setLocale(loc)}
                    className={`uppercase px-0.5 cursor-pointer transition-all duration-300 ${textColor} ${
                      locale === loc ? "font-medium" : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    {loc}
                  </button>
                </span>
              ))}
            </div>
            <a
              href={GRAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--accent-brand)] text-[var(--secondary-brand)] font-satoshi font-medium text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              <Bike size={13} />
              {t.nav.orderGrab}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden p-1 transition-all duration-300 ${textColor}`}
            onClick={() => setDrawerOpen(true)}
            aria-label={t.nav.openMenu}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — unchanged */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-[var(--secondary-brand)] flex flex-col p-8 border-l border-[var(--divider)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              <button
                className="self-end text-[var(--dominant-brand)] opacity-60 hover:opacity-100 transition-opacity mb-12"
                onClick={() => setDrawerOpen(false)}
                aria-label={t.nav.closeMenu}
              >
                <X size={20} />
              </button>

              <nav className="flex flex-col gap-7 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-cormorant italic text-[var(--dominant-brand)] text-3xl hover:text-[var(--accent-brand)] transition-colors"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-[var(--divider)]">
                <div className="flex items-center gap-4 mb-6 font-satoshi text-xs tracking-widest">
                  {(["fr", "en", "th"] as const).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setLocale(loc)}
                      className={`uppercase cursor-pointer transition-colors ${
                        locale === loc
                          ? "text-[var(--accent-brand)]"
                          : "text-[var(--dominant-brand)] opacity-40"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
                <a
                  href={GRAB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[var(--accent-brand)] text-[var(--secondary-brand)] font-satoshi font-medium text-xs tracking-[0.2em] uppercase px-4 py-3.5"
                >
                  <Bike size={14} />
                  {t.nav.orderGrab}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
