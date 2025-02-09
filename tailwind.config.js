/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-coffee': '#eddbc7',
        'dark-coffee': '#876445',
        'taupe-coffee': '#8b7e74',
      },
      boxShadow: {
        coffee: '0 0 0 3px rgba(139, 126, 116, 55%);',
      },
      fontFamily: {
        montserrat: ['Montserrat, Helvetica, sans-serif'],
      },
    },
  },
  plugins: [],
};
