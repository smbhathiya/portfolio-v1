/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins","sans-serif"],
      },
      colors:{
        primary: "#2c438a",
        secondary: "#22356e",
        light: "#426ff5",
        brandDark: "#0b0e17",
        
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
}