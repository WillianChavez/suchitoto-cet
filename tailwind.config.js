/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fbd9ad',
          300: '#f8be79',
          400: '#f49643',
          500: '#f17b1e',
          600: '#e26214',
          700: '#bc4b13',
          800: '#963b17',
          900: '#793316',
        },
        earth: {
          50: '#f8f7f4',
          100: '#f0ede6',
          200: '#e0d9cd',
          300: '#c9bca7',
          400: '#b09a81',
          500: '#9c8267',
          600: '#847058',
          700: '#6b5949',
          800: '#5a4d42',
          900: '#4c423a',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
