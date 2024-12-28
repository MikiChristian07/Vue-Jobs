/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite-react/tailwind';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 30%',
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};