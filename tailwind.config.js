module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        dark: "#1d1d1d",
        light: "#FAFAFA",
        rose: "#9F1239",
        red: "#DC2626",
        cyan: "#155E75",
        teal: "#0F766E",
        yellow: "#EAB308",
        brown: "#78350F",
        darker: "#000",
        lighter: "#E2E8F0",
      },
      fontFamily: {
        fira: ["Fira sans", "sans-serif"],
        mono: ["monospace", "san-serif"],
        ubunt: ["Ubuntu", "sans-serif"],
        poppins: ["Poppins", "san-serif"],
        lato: ["Lato", "sans-serif"],
        cutiv: ["cutive mono", "monospace"],
        quick: ['Quicksand']
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
};
