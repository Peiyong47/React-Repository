const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors:{
      'westly': {
        100: '#EAEBED',
        200: '#75E2FF',
        DEFAULT: '#5689C0',
        600: '#244D61',
      },
      'darkBlue': {
        400: '#183B56',
        DEFAULT: '#0D2436',
      },
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

