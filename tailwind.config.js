/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        jobed: {
          primary: "#FF7E4E",
          secondary: "#FFA41B",
          accent: "#5A75BC",
          base: "#FFFFFF",
          "primary-content": "#FFFFFF",
        },
      },
    ],
  },
};
