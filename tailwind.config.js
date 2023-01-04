/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        darkBlue: "#262E38",
        lightGrey: "#969FAD",
        mediumGrey: "#7C8798",
        orange: "#FC7614",
        darkestBlue: "#131518",
        blackGradient:
          "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);",
      },
      colors: {
        lightGrey: "#969FAD",
        mediumGrey: "#7C8798",
        orange: "#FC7614",
      },
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
  },
  plugins: [],
};
