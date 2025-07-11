/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'resilienza-primary': '#C65D47',
        'resilienza-secondary': '#E8A87C',
        'resilienza-accent': '#F4D1AE',
        'resilienza-warm': '#D4B886',
      },
    },
  },
  plugins: [],
}