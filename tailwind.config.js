/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ink rather than pure black, on warm paper.
        black: '#1E1B18',
        paper: '#F8F2EA',
        // Madder red, the store's accent; 50/100 double as the paper and linen grounds.
        madder: {
          50: '#F8F2EA',
          100: '#F1E6D8',
          200: '#E6CDBE',
          300: '#D9A593',
          400: '#C8644F',
          500: '#B04A35',
          600: '#9E3B2C',
          700: '#7F2F23',
          800: '#5F231A',
          900: '#401812',
        },
        // Saffron for ratings and small highlights.
        saffron: {
          50: '#FBF6EC',
          100: '#F5EAD2',
          200: '#EBD5A6',
          300: '#DFBD76',
          400: '#D3A852',
          500: '#C99A3B',
          600: '#8F6A1F',
          700: '#74561A',
          800: '#5A4314',
          900: '#3F2F0E',
        },
        // Peacock green for information and secondary actions.
        peacock: {
          50: '#EEF5F4',
          100: '#D5E7E5',
          200: '#ABCFCB',
          300: '#7DB2AD',
          400: '#52918B',
          500: '#3A7570',
          600: '#2F5D5A',
          700: '#264B49',
          800: '#1C3836',
          900: '#132524',
        },
        beige: '#F1E6D8',
      },
      fontFamily: {
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
      },
      keyframes: {
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-1.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
