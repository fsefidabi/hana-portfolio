/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        theWidest: "0.2em"
      }
    },
    fontFamily: {
      'NuetralFace': ['NuetralFace', 'sans-serif'],
      'ClashGrotesk': ['ClashGrotesk', 'sans-serif']
    },
  },
  plugins: [],
}
