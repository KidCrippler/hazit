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
          50: '#f0f9f4',
          100: '#dbf0e3',
          200: '#b9e1ca',
          300: '#8ccba8',
          400: '#5daf85',
          500: '#4a8359',
          600: '#2d5f3f',
          700: '#244d33',
          800: '#1e4029',
          900: '#1a3422',
          950: '#0d1c13',
          DEFAULT: '#4a8359',
          light: '#5daf85',
          dark: '#1e4029',
        },
        'olive': {
          50: '#f7f8f4',
          100: '#eef0e6',
          200: '#dde2cd',
          300: '#c4cdac',
          400: '#a8b687',
          500: '#8B9E5F',
          600: '#748650',
          700: '#5c6a40',
          800: '#4d5736',
          900: '#41492e',
          DEFAULT: '#8B9E5F',
          light: '#a8b687',
          dark: '#5c6a40',
        },
        'coral': {
          50: '#fff1f3',
          100: '#ffe4e8',
          200: '#ffcdd6',
          300: '#ffa5b4',
          400: '#ff7391',
          500: '#FF6B8A',
          600: '#eb2f5e',
          700: '#c81f4a',
          800: '#a71d43',
          900: '#8e1c3e',
          DEFAULT: '#FF6B8A',
          light: '#ff7391',
          dark: '#c81f4a',
        },
        'brand-orange': {
          DEFAULT: '#ea580c',
          light: '#fb923c',
          dark: '#c2410c',
        },
        'brand-blue': {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1e40af',
        },
        'brand-beige': {
          DEFAULT: '#fdfcf8',
          light: '#ffffff',
          dark: '#f5f3ed',
        },
      },
      fontFamily: {
        'hebrew': ['Rubik', 'Assistant', 'Heebo', 'system-ui', 'sans-serif'],
        'display': ['Heebo', 'Assistant', 'sans-serif'],
        'hero': ['Frank Ruhl Libre', 'Heebo', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(74, 131, 89, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(74, 131, 89, 0.8), 0 0 30px rgba(74, 131, 89, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(74, 131, 89, 0.5)',
        'glow-orange': '0 0 20px rgba(234, 88, 12, 0.5)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
}

