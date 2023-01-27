/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('https://hyper-react.coderthemes.com/static/media/bg-pattern-light.76f84bb3.svg')",
        'bg-fondonav': "url('https://hyper-react.coderthemes.com/static/media/waves.625cbc42.png')"
      },
      colors:{
        'navBar': "#313a46",
        'fontIcon' : "#DCDEFC",
        'colorIconDas': "#727CF5"
      }
    },
  },
  plugins: [],
}
