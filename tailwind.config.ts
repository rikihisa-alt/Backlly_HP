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
        bg: "#F8FAFC",
        "bg-white": "#FFFFFF",
        navy: "#0F172A",
        "navy-mid": "#1E293B",
        brand: "#1D4ED8",
        "brand-dark": "#1E40AF",
        "brand-light": "#3B82F6",
        text: "#0F172A",
        "text-muted": "#64748B",
        border: "#E2E8F0",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-noto-sans-jp)", "Inter", "sans-serif"],
      },
      spacing: {
        section: "120px",
      },
    },
  },
  plugins: [],
};
export default config;
