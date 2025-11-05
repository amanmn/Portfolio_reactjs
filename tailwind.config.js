/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ Enables dark mode manually by toggling the "dark" class on <html>
  darkMode: "class",

  // ✅ Tells Tailwind to scan all HTML and React component files for classes
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // ✅ Clean, modern font family setup
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
      },

      // ✅ Custom theme colors for both modes
      colors: {
        darkBg: "#0B0B0D",     // elegant dark background
        lightBg: "#F9FAFB",    // soft light background
        accent: "#7C3AED",     // purple accent
        accent2: "#6366F1",    // indigo accent
        textPrimary: "#E5E7EB",   // light text for dark mode
        textSecondary: "#9CA3AF", // secondary gray text
      },

      // ✅ Beautiful glowing shadows for modern UI
      boxShadow: {
        glow: "0 0 15px rgba(124, 58, 237, 0.4)",
      },

      // ✅ Gradient background utilities for buttons, hero, etc.
      backgroundImage: {
        "gradient-accent": "linear-gradient(90deg, #6366F1 0%, #7C3AED 100%)",
      },
    },
  },
  plugins: [],
};
