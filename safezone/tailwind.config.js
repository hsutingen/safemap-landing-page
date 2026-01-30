/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f6',
          100: '#d9f0e8',
          200: '#b5e1d3',
          300: '#84cbb7',
          400: '#55af97',
          500: '#37957d',
          600: '#2a7865',
          700: '#256153',
          800: '#224e44',
          900: '#1f4139',
          950: '#0d2520',
        },
        warm: {
          50: '#fefcf8',
          100: '#fdf6e8',
          200: '#faecc5',
          300: '#f5dc98',
          400: '#efc56a',
          500: '#e9ad46',
          600: '#d4902e',
          700: '#b07126',
          800: '#8e5a26',
          900: '#754a22',
          950: '#3f2510',
        },
        surface: {
          50: '#fafaf8',
          100: '#f5f4f0',
          200: '#e8e6df',
          300: '#d6d3c8',
          400: '#b8b4a5',
          500: '#a09b8a',
          600: '#8b8575',
          700: '#746e60',
          800: '#615c51',
          900: '#514d44',
          950: '#2b2924',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '"Inter"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'draw-path': 'drawPath 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawPath: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
