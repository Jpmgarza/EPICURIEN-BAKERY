import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/metadata";

const locales = ["en", "fr", "th"] as const;
const routes = ["", "/menu", "/about", "/visit", "/contact"] as const;
const LAST_MODIFIED = new Date("2026-05-05");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            ...Object.fromEntries(locales.map((l) => [l, `${BASE_URL}/${l}${route}`])),
            "x-default": `${BASE_URL}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
