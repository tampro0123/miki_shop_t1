/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mon': ['Montserrat'],
        'plf': ['Playfair Display']
      },
      colors: {
        'bgr': '#f5f5f5',
        'primary-text': '#272727',
        '2nd-text': '#272727',
        '3rd-text': '#B78D71',
        'price-text': '#92715A',
        'btn': '#251C17',
        'Neutral/2': '#626262',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
      },
      borderRadius: {
        '8': '8px',
        '16': '16px',
      },
      fontSize: {
        '32': '32px',
      },
    },
  },
  plugins: [],
}
