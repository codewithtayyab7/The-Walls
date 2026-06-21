/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        bg2: '#1A1A1A',
        card: '#232323',
        green: '#556B2F',
        scout: '#4A5D23',
        flesh: '#B5651D',
        blood: '#8B0000',
        gold: '#C8A951',
        goldsoft: 'rgba(200,169,81,0.15)',
        border: '#3A3A3A',
        ink: '#F5F5F5',
        gray: '#A0A0A0',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 12px rgba(200,169,81,0.4)',
        cardHover: '0 8px 30px rgba(200,169,81,0.15)',
      },
      keyframes: {
        heroIn: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fog: {
          from: { opacity: 0.4, transform: 'scale(1)' },
          to: { opacity: 1, transform: 'scale(1.05)' },
        },
        bounce2: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(6px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-3px)' },
          '75%': { transform: 'translateX(3px)' },
        },
        march: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        modalIn: {
          from: { transform: 'scale(0.95)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        heroIn: 'heroIn 1.4s ease both',
        fog: 'fog 8s ease-in-out infinite alternate',
        bounce2: 'bounce2 2s infinite',
        shake: 'shake 2s ease-in-out infinite',
        march: 'march 8s linear infinite',
        modalIn: 'modalIn 0.3s ease',
      },
    },
  },
  plugins: [],
}
