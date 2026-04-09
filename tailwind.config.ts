import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        satoshi: "var(--font-satoshi)",
        cormorant: "var(--font-cormorant)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
};

export default config;
