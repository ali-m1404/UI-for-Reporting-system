/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      textAlign: {
        'right': 'right',
      },
    },
  },
  plugins: [],
}