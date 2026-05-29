/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'boutique-pink': '#E8B4B8',
        'boutique-pink-dark': '#D4949A',
        'boutique-pink-light': '#F5D5D7',
        'boutique-black': '#000000',
        'boutique-white': '#FFFFFF',
        'boutique-gray': '#F8F8F8',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
