import { error } from "console";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28166F",
        secondary: "#FED295",
        baseWhite: "#F2F4F8",
        baseBlack: "#1F2328",
        input: "#F2F4F8",
        greyHero: "#8F97A6",
        borderDefault: "#E8E8E8",
        greySale: "#B0B0B0",
        error: "#F42E2E",
        errorBackground: "#FFE8E8",
      },
    },
  },
  plugins: [],
};
export default config;
