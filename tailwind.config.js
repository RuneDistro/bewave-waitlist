/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#050517',
        narvik: '#e7e7d8',
        white: '#F5F5F5',
        silver: '#5D737E',

        orange: '#EC642B',
        'dark-orange': '#863918',
      },
    },
  },
  plugins: [],
}
