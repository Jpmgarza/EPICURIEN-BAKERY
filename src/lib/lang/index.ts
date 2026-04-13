"use client";

import {
  createElement,
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import en, { type Dict } from "./en";
import fr from "./fr";
import th from "./th";

export type Locale = "en" | "fr" | "th";

const LOCALES: readonly string[] = ["en", "fr", "th"];

const dictionaries: Record<Locale, Dict> = { en, fr, th };

interface LangContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
}

const LangContext = createContext<LangContextValue>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export function LangProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();
  const pathname = usePathname();

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale); // instant UI feedback before navigation
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && LOCALES.includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    router.push(`/${segments.join("/")}`);
  }

  return createElement(
    LangContext.Provider,
    { value: { locale, setLocale, t: dictionaries[locale] } },
    children
  );
}

export function useLang() {
  return useContext(LangContext);
}
