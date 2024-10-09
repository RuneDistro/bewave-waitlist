import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {},
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
