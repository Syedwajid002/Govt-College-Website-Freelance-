/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
      colors:{
        bot:"#2998EB",
        bg:"#080c24"
      },
      margin:{
        screen:"95vh"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}