/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,mjs,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E07A5F',
          dark: '#1A1816',
          muted: '#6B655D',
          bg: '#FAF9F6',
          border: '#E6E2D8',
          card: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}
