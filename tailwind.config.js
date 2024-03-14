/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'uranian': '#B3D3F9',
      'aspargus': '#77AD78',
      'spring': '#337155',
      'beaver': '#AA9488',
      'mount-pink': '#7F7382',
    },
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}