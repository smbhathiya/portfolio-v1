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
        box: "#1f2f5e",
        boxG: "#1f5e33",
        boxGh: "#2d8047",
        brandDark: "#0b0e17",
        fb: "#1877F2",
        github: "#770cc9",
        linkedin: "#0077B5",
        
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