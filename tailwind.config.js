/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-edit': '#446084',
      },
      fontFamily: {
         
         Dafoe: ["Della Respira", 'serif']
      },
    },
  },
  plugins: [],
}

