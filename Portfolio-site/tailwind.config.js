/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1B262C",
        secondary: "#45474B",
        tertiary: "#3F4E4F",
        "text-pri": "#B6CBBD",
        "black-100": "#1E1E1E",
        "black-200": "#4A4A4A",
        "white-100": "#f3f3f3",
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

