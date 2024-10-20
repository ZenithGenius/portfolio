/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,js}"],
  darkMode: ['class'],
  prefix: '',
  separator: ':',
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "ml-text-white": "var(--ml-text-white)",
        "ml-text-red": "var(--ml-text-red)",
        "ml-bg-purple": "var(--ml-bg-img)",
      },
      colors: {
        transparents: {
          purple: "#66008057",
        },
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#b565fd", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        primaryBlueDark: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        skiil: "var(--shadow-skills)",
        liquid: "var(--shadow-liquid)",
        "contact-box": "var(--shadow-contact)",
      },
      screens: {
        xs: "450px",
        mxs: "576px",
        tablet: "780px",
        mlg: "992px",
      },
      maxWidth: {
        maxCalc: "calc(100dvh - 305px)",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
};
