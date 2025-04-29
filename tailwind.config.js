/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(49, 125, 140)',
        'primary-light': 'rgb(62, 158, 177)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}

