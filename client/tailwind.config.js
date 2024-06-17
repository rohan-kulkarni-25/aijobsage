/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      // xl: { max: "1350px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1700px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "900px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "750px" },
      //
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
