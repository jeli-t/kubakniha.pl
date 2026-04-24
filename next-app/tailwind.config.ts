import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        court: {
          deep: "var(--court-deep)",
          green: "var(--court-green)",
          panel: "var(--court-panel)",
          line: "var(--court-line)",
          white: "var(--court-white)",
          orange: "var(--court-orange)",
          purple: "var(--court-purple)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        badminton: {
          "primary": "#006f63",
          "secondary": "#5c9b92",
          "accent": "#f47a3d",
          "neutral": "#003f38",
          "base-100": "#00463f",
          "base-200": "#003f38",
          "base-300": "#002f2a",
          "base-content": "#f8fff9",
          "info": "#a9c9c2",
          "success": "#5c9b92",
          "warning": "#f47a3d",
          "error": "#dc4a37",
        },
      },
    ],
  },
};
export default config;
