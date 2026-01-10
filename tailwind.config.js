/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fdf2f8', // pink-50
          DEFAULT: '#db2777', // pink-600
          dark: '#831843', // pink-900
        }
      }
    },
  },
  plugins: [],
}
