/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'orange': 'hsl(31, 77%, 52%)',
      'cyan': 'hsl(184, 100%, 22%)',
      'darkcyan': 'hsl(179, 100%, 13%)'
    },
    fontFamily: {
      heading: ['Big Shoulders Display', 'cursive'],
      primary: ['Lexend Deca', 'sans-serif'],
    },
    fontSize: {
      base: ['15px', '25px'],
      heading: ['40px', '48px'],
    },
    extend: {},
  },
  plugins: [],
}
