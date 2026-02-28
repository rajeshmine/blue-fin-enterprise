import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
     
      colors: {
        primary: "#0D1B3D",   // deep navy dark blue
        accent: "#E53935",    // strong red accent
        dark: "#0A0F2C",      // very dark blue background
        gray: {
          700: "#4B5563",     // muted dark gray for subtext
        },
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0,0,0,0.15)",
        glow: "0 0 40px rgba(229,57,53,0.4)",
      },
      backgroundImage: {
        gradientPrimary:
          "linear-gradient(135deg, #0D1B3D 0%, #1B263B 100%)",
      },
    }
  },
  plugins: [],
};

export default config;