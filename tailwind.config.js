/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   roboto: ["Roboto", "sans-serif"],
    // },
    extend: {
      fontFamily: {
        vcr: ["var(--font-vcr)"],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        "spin-slow-reverse": "spin 60s linear infinite reverse",
        "spin-slow-reverse": "spin 60s linear infinite reverse",
        "blur-in": "blur-fade 3s ease-in-out forwards",
      },
      keyframes: {
        "blur-fade": {
          "100%": { filter: "blur(0px)" },
          "0%": { filter: "blur(40px)" },
        },
      },
      colors: {
        // "accent-1": "#FAFAFA",
        // "accent-2": "#EAEAEA",
        // "accent-7": "#333",
        // success: "#0070f3",
        // cyan: "#16CEB9",

        "neon-red": "#FC0A54",
        "neon-blue": "#3e73c4",
        "neon-green": "#16CEB9",
        "base-1": "#ACACAB",
        "gray-lighter": "#787883",
        "black-1": "#1c1c22",
        "black-lighter": "#121218",
        black: "#030309",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
