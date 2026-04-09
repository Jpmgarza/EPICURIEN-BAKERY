"use client";

import {
  createElement,
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import en, { type Dict } from "./en";
import fr from "./fr";
import th from "./th";

export type Locale = "en" | "fr" | "th";

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

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  return createElement(
    LangContext.Provider,
    { value: { locale, setLocale, t: dictionaries[locale] } },
    children
  );
}

export function useLang() {
  return useContext(LangContext);
}
