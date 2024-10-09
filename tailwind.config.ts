import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        'bg-white': '#F0F0F0',
        marfin: '#E6E6E6',

        beige: '#ffdfc3',

        blue: '#49EAFF',

        purple: '#D495FF',
        'bg-purple': '##7b3bfc25',

        black: '#07080a',
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
