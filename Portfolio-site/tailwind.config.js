/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1B262C",
        secondary: "#1d212a",
        tertiary: "#1d212a",
        sec: "#29a688",
        "text-pri": "#000",
        "black-100": "#30353b",
        "black-200": "#4A4A4A",

      },
      fontFamily: {
        'newtype': ['NewType', 'sans-serif'],
        'moonrising': ['Moonrising', 'sans-serif'],
        'guardian': ['Guardians', 'sans-serif'],
      },
      boxShadow: {
        card: "",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

