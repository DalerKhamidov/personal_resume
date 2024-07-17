/** @type {import('tailwindcss').Config} */
export default {
  content:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#07150D',
        secondary : '#0DB277'
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
      },
      container: {
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        }
      }
    },
  },
  plugins: [],
}