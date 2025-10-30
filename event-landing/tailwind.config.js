/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': {
          DEFAULT: '#2d5f3f',
          light: '#4a8359',
          dark: '#1e4029',
        },
        'brand-blue': {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
        },
        'brand-beige': {
          DEFAULT: '#e8e4d9',
          light: '#f5f3ed',
        },
      },
      fontFamily: {
        'hebrew': ['Assistant', 'Heebo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

