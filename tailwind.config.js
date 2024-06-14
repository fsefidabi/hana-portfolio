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
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        moveInRight: "moveInRight 1s ease",
        fadeIn: "fadeIn 500ms ease-in-out",
        fadeOut: "fadeOut 500ms ease-in-out",
        scale: "scale 300ms ease-in-out"
      },
      boxShadow: {
        "smooth": "0px 0px 10px 6px #72220a"
      }
    },
    fontFamily: {
      "NuetralFace": ["NuetralFace", "sans-serif"],
      "ClashGrotesk": ["ClashGrotesk", "sans-serif"],
      "Inter": ["Inter", "sans-serif"]
    }
  },
  plugins: []
}
