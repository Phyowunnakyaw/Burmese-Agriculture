/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green' : '#1F9484',
        'light' : '#19C2B2',
        'yellow' : '#FFD400',
        'milk' : '#F5F7EA',
      },
      fontFamily: {
        'ubuntu' : 'Ubuntu', 
       },
    },
  },
  plugins: [],
}

