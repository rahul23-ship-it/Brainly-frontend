/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        secondaryButtoncolor: "#e0e7ff",
        secodaryButtontextcolor: "#352ea0" ,
        primaryButtoncolor : "#5046e4" ,
        primary : "#feffff" ,
        primary2 : "#f9fbfc",
        bordercolor : "#cbd7db",
        sidebartextcolor: "#848588"

      }
    },
  },
  plugins: [],
}

