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
  textColorClass,
  dimOpacity = "opacity-50",
}: {
  href: string;
  label: string;
  textColorClass: string;
  dimOpacity?: string;
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
        className={`font-satoshi text-xs tracking-[0.2em] uppercase ${dimOpacity} hover:opacity-100 transition-all duration-300 ${textColorClass}`}
      >
        {label}
      </Link>
      <motion.span
        className="absolute -bottom-0.5 left-0 h-px w-full bg-current origin-left block"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}

type DisplayMode = "transparent" | "light" | "dark";

export function NavBar() {
  const { locale, setLocale, t } = useLang();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState<"dark" | "light">("light");
  const pathname = usePathname();

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  // ── Home page: scroll-aware transparency (unchanged from previous) ──────
  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // ── Non-home pages: section-aware color system ──────────────────────────
  useEffect(() => {
    if (isHome) return;

    const sections = document.querySelectorAll<HTMLElement>("[data-nav-color]");
    if (sections.length === 0) return;

    // Find the section currently occupying the navbar region.
    // "Active" = top has passed the 80px navbar threshold AND bottom is still visible.
    // Among candidates, the one whose top is closest to (but ≤) 80px wins.
    const syncTheme = () => {
      let active: HTMLElement | null = null;
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 0) {
          if (!active || rect.top > active.getBoundingClientRect().top) {
            active = sec;
          }
        }
      });
      if (active) {
        setNavTheme(
          (active as HTMLElement).dataset.navColor as "dark" | "light"
        );
      }
    };

    // Sync immediately on mount/route-change
    syncTheme();

    // IntersectionObserver triggers re-sync whenever any section crosses
    // the 80px navbar threshold — avoids continuous scroll polling
    const observer = new IntersectionObserver(() => syncTheme(), {
      rootMargin: "-80px 0px 0px 0px",
      threshold: [0, 1],
    });
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [isHome, pathname]);

  // ── Derive three-way display mode ───────────────────────────────────────
  const displayMode: DisplayMode = transparent
    ? "transparent"
    : !isHome && navTheme === "dark"
    ? "dark"
    : "light";

  // Background + border — all values reference CSS custom properties, no hex in JS
  const navBgClass: Record<DisplayMode, string> = {
    transparent: "bg-transparent border-transparent",
    dark: "bg-[var(--secondary-brand)]/95 backdrop-blur-md border-[var(--dominant-brand)]/8",
    light: "bg-[var(--dominant-brand)]/95 backdrop-blur-md border-[var(--secondary-brand)]/10",
  };

  // Text colour — all values are CSS colour names or CSS var references
  const textColorClass: Record<DisplayMode, string> = {
    transparent: "text-white",
    dark: "text-[var(--dominant-brand)]",
    light: "text-[var(--secondary-brand)]",
  };

  // CTA button — 3 states driven by the same displayMode
  const ctaClass: Record<DisplayMode, string> = {
    transparent: "bg-[var(--accent-brand)] text-[var(--secondary-brand)]",
    light:       "bg-[var(--secondary-brand)] text-[var(--dominant-brand)]",
    dark:        "bg-[var(--accent-brand)] text-[var(--secondary-brand)]",
  };

  const bg = navBgClass[displayMode];
  const tc = textColorClass[displayMode];
  const cta = ctaClass[displayMode];

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/menu", label: t.nav.menu },
    { href: "/about", label: t.nav.about },
    { href: "/visit", label: t.nav.visit },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ease-in-out ${bg}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-cormorant text-lg tracking-[0.15em] group-hover:opacity-70 transition-all duration-300 ${tc}`}
            >
              ÉPICURIEN
            </span>
            <span
              className={`font-satoshi text-[8px] tracking-[0.35em] uppercase mt-0.5 transition-all duration-300 ${displayMode === "transparent" ? "opacity-75" : "opacity-60"} ${tc}`}
            >
              {t.nav.brandSub}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                textColorClass={tc}
                dimOpacity={displayMode === "transparent" ? "opacity-75" : "opacity-50"}
              />
            ))}
          </div>

          {/* Right: Lang Toggle + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-0.5 font-satoshi text-[10px] tracking-widest">
              {(["fr", "en", "th"] as const).map((loc, i) => (
                <span key={loc} className="flex items-center">
                  {i > 0 && (
                    <span
                      className={`opacity-20 px-1 transition-all duration-300 ${tc}`}
                    >
                      |
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setLocale(loc)}
                    className={`uppercase px-0.5 cursor-pointer transition-all duration-300 ${tc} ${
                      locale === loc
                        ? "font-medium"
                        : `${displayMode === "transparent" ? "opacity-75" : "opacity-50"} hover:opacity-100`
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
              className={`flex items-center gap-2 font-satoshi font-medium text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 hover:opacity-90 transition-[background-color,color] duration-300 ease-in-out ${cta}`}
            >
              <Bike size={13} />
              {t.nav.orderGrab}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden p-1 transition-all duration-300 ${tc}`}
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
                type="button"
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
                    className="font-cormorant italic text-[var(--dominant-brand)] text-3xl hover:opacity-70 transition-opacity"
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
                      type="button"
                      onClick={() => setLocale(loc)}
                      className={`uppercase cursor-pointer transition-colors ${
                        locale === loc
                          ? "text-[var(--dominant-brand)]"
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
