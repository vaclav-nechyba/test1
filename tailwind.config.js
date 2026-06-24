/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1A38',
          dark: '#07122A',
          deeper: '#040D1E',
        },
        gold: {
          light: '#F0CE6E',
          DEFAULT: '#E3B04B',
          dark: '#C8901F',
        },
        royal: '#1D4ED8',
        muted: '#C7CEDA',
      },
      fontFamily: {
        heading: ['Anton', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F0CE6E 0%, #E3B04B 50%, #C8901F 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #F0CE6E 0%, #C8901F 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0A1A38 0%, #07122A 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
