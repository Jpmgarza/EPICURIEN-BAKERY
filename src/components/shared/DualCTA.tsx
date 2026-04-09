"use client";

import { Bike, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

const GRAB_URL = "https://food.grab.com/th/en/";
const MAPS_URL = "https://maps.app.goo.gl/mRJsESrH4KEqCGJ9A";

interface DualCTAProps {
  heading?: string;
  subline?: string;
  variant?: "light" | "dark";
  className?: string;
}

export function DualCTA({
  heading,
  subline,
  variant = "dark",
  className,
}: DualCTAProps) {
  const { t } = useLang();

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 text-center",
        className
      )}
    >
      {heading && (
        <h2
          className={cn(
            "font-cormorant italic text-4xl md:text-5xl leading-tight",
            variant === "dark"
              ? "text-[var(--dominant-brand)]"
              : "text-[var(--secondary-brand)]"
          )}
        >
          {heading}
        </h2>
      )}
      {subline && (
        <p
          className={cn(
            "font-satoshi text-xs tracking-[0.2em] uppercase",
            variant === "dark"
              ? "text-[var(--dominant-brand)] opacity-50"
              : "text-[var(--muted-text)]"
          )}
        >
          {subline}
        </p>
      )}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href={GRAB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[var(--accent-brand)] text-[var(--secondary-brand)] font-satoshi font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          <Bike size={15} />
          {t.hero.ctaGrab}
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2.5 border font-satoshi font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:opacity-70 transition-opacity",
            variant === "dark"
              ? "border-[var(--dominant-brand)]/30 text-[var(--dominant-brand)]"
              : "border-[var(--secondary-brand)]/30 text-[var(--secondary-brand)]"
          )}
        >
          <MapPin size={15} />
          {t.hero.ctaVisit}
        </a>
      </div>
    </div>
  );
}
