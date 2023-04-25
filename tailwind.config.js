/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins-Regular", ...defaultTheme.fontFamily.sans],
        serif: ["Poppins-Regular", ...defaultTheme.fontFamily.serif],
        mono: ["Poppins-Regular", ...defaultTheme.fontFamily.mono],
        "poppins-bold": ["Poppins-Bold", ...defaultTheme.fontFamily.sans],
        "poppins-semibold": [
          "Poppins-SemiBold",
          ...defaultTheme.fontFamily.sans,
        ],
        "poppins-medium": ["Poppins-Medium", ...defaultTheme.fontFamily.sans],
        "poppins-regular": ["Poppins-Regular", ...defaultTheme.fontFamily.sans],
        "poppins-light": ["Poppins-Light", ...defaultTheme.fontFamily.sans],
        "PoiretOne-Regular": [
          "PoiretOne-Regular",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: "#2D5859",
        secondary: "#EDF1FA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    backgroundImage: {
      hero: "url('/static/images/hero.png')",
    },
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@headlessui/tailwindcss"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
