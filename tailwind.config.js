/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'navLogo' : ['Pacifico', 'sans-serif']
      },
      backgroundImage : {
        'navBg' : "url('/resources/navBg.jpg')"
      }
    },
  },
  plugins: [],
}

