import type { Config } from 'tailwindcss'

const config: Config = {
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
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      lgp: '1024px',
      xl: '1440px',
    },
  },
  plugins: [],
}

export default config
