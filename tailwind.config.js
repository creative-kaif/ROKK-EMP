/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'TitlingGothicFB':['TitlingGothicFB', 'sans-serif'],
        'TitlingGothicFB-Regular':['TitlingGothicFB-Regular', 'sans-serif'],
        'Poppins-Regular':['Poppins-Regular', 'sans-serif'],
        'Poppins-Medium':['Poppins-Medium', 'sans-serif'],
        'Poppins-Bold':['Poppins-Bold', 'sans-serif'],
      },
      colors: {
        black: {
          50: '#CFCFCF',
          100: '#1D1D1D',
          150: '#848484',
          200: '#262626',
          250: '#515151',
          300: '#111111',
          400: '#0B0B0B',
          500: '#000000',
        },
        Orange:{
          100: '#FFB972',
          200: '#FF8303',
        }
      }
    },
  },

}