/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx}", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F7FA",
        surface: "#FFFFFF",
        ink: "#0F1B33",
        muted: "#475269",
        line: "#DCE1EB",
        ouro: { DEFAULT: "#F4B400", soft: "#FFE9A6", deep: "#8A5A00" },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};

export default config;
