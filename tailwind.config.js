/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#a3ffae',
        'secondary' : '#23222a'
      },
    },
  },
  plugins: [],
}
