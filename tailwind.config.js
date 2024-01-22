/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#e91e63',
        'secondary': '#2E2E35'
      }
    },
  },
  plugins: [],
}

