/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#FF8E29",
        secondary:{
          100: "#FFFFFF",
          900: "#FFF4EA",
        }
      }
    },
  },
  plugins: [],
}