/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    extend: {
      fontFamily : {
        'outfit' : ['Outfit','sans-serif']
      }
    },
  },
  plugins: [],
}

