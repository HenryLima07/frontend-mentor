/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    screens:{
      "mobile": '376px',
      "Desktop": '1440px'
    },
    colors:{
      "white": 'hsl(0, 0%, 100%)',
      "ligh-gray": 'hsl(212, 45%, 89%)',
      "grayish-blue": 'hsl(220, 15%, 55%)',
      "dark-blue": 'hsl(218, 44%, 22%)'
    },
    fontFamily:{
      "Outfit": ['Outfit', 'sans-serif'],
    },
    fontSize:{
      "body": '1rem', //15px
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.50rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontWeight:{
      "normal": 400,
      "bold": 700
    },
    extend: {},
  },
  plugins: [],
}

