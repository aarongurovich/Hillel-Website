/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        red: {
          700: '#CC0000', // Texas Tech Red
          800: '#990000',
        },
        blue: {
          800: '#1E40AF', // Complementary blue
          900: '#1E3A8A',
        },
      },
      animation: {
        bounce: 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
};