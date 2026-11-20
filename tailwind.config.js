/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#122B22',
        'forest-hover': '#1B3D31',
        cream: '#F7F4EE',
        champagne: '#C5A059',
        charcoal: '#3A4641',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        page: '1280px',
      },
    },
  },
  plugins: [],
};
