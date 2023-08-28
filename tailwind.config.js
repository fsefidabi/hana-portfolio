/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "xs": "500px"
      },
      letterSpacing: {
        theWidest: "0.2em"
      },
      colors: {
        primary: "#000",
        secondary: "#FFF",
        tertiary: "#d35d3d",
        quaternary: "#c0bfb5",
        lightGray: "#898989"
      },
      width: {
        "5/11": "45%"
      },
      keyframes: {
        moveInRight: {
          "0%": { right: "-100%" },
          "100%": { right: "0.5rem" }
        }
      },
      animation: {
        moveInRight: "moveInRight 1s ease"
      }
    },
    fontFamily: {
      "NuetralFace": ["NuetralFace", "sans-serif"],
      "ClashGrotesk": ["ClashGrotesk", "sans-serif"]
    }
  },
  plugins: []
}
