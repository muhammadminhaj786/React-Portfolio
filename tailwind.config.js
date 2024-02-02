/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#e0a747',
        'secondary': '#34343b',
        'main': '#302c34',
        'gold': '#e0a747'
      }
    },
  },
  plugins: [],
}

