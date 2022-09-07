
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': { 'max': '480px' },
      },
      fontFamily: {
        mon: ['Montserrat'],
        plf: ['Playfair Display'],
      },
      colors: {
        bgr: '#FFF9F6',
        'bgr-auth': '#fff9f6',
        'primary-text': '#272727',
        '2nd-text': '#272727',
        '3rd-text': '#B78D71',
        'price-text': '#92715A',
        btn: '#251C17',
        'Neutral/2': '#626262',
        'Neutral/3': '#A9A9A9',
        'border-1': '#6E5544',
        msgEr: '#d2311b',
      },
      spacing: {
        8: '8px',
        16: '16px',
        24: '24px',
      },
      borderRadius: {
        8: '8px',
        16: '16px',
      },
      fontSize: {
        32: '32px',
      },
      dropShadow: {
        product: '0px 4px 52px rgba(15, 15, 15, 0.25)',
      },
      boxShadow: {
        product: '0px 0px 60px 10px rgba(15, 15, 15, 0.1)',
      },
      keyframes: {
        loading: {
          '0%': { transform: 'rotate(0deg))', boxShadow: "1px 5px 2px #e65c00" },
          '50%': { transform: 'rotate(180deg)', boxShadow: "1px 5px 2px #18b201" },
          '100%': { transform: 'rotate(360deg)', boxShadow: "1px 5px 2px #0456c8" },
        },
        text: {
          '50%': { color: "black" },
        },
      },
      animation: {
        loading: 'loading 2s linear infinite',
        text: 'text 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
