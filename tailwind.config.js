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
        main: "#008080",
        mainLight:"#02d9d9",
        mainDark:"#185959",
        iconLight:"#0ee6e6",
        brandDark: "#0b0e17",
        bgDark2: "#1f2330",
        bgDark3: "#2b2f44",
        
      },
      boxShadow: {
        'main': '0 4px 6px rgba(11, 14, 23, 0.5)', 
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