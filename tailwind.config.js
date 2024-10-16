const { defaultTheme } = require('antd/es/theme/context')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },

      colors: {
        'bg-standard': '#f7f9fa',
        'green-standard': '#008539',
        'success-standard': '#008539'
      },

      boxShadow: {
        standard: 'rgba(0, 0, 0, 0.08) 0px 1px 2px 0px, rgb(219, 227, 231) 0px 0px 0px 1px inset'
      }
    }
  },
  plugins: []
}
