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

        pink: '#EE95F8',

        purple: '#D495FF',
        'bg-purple': '#7b3bfc25',

        black: '#07080a',
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '100%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 4s linear infinite',
        gradient: 'gradient 6s linear infinite',
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
