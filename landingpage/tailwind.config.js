/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#17110D',
        'paper': '#F4EEE0',
        'brass': '#B4893F',
        'brass-light': '#D9B876',
        'ink': '#221812', 
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Manrope', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}