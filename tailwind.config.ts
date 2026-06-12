import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        osys: {
          background: "#FAF8F5",
          surface: "#F6F4F1",
          ink: "#1F2937",
          sage: "#7C8B76",
          blue: "#5D7285",
          alert: "#B35050",
          line: "rgba(31, 41, 55, 0.11)"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(31, 41, 55, 0.09)",
        card: "0 14px 42px rgba(31, 41, 55, 0.08)"
      },
      borderRadius: {
        "2xl": "1.35rem",
        "3xl": "1.8rem"
      }
    }
  },
  plugins: []
};

export default config;
