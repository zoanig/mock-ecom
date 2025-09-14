/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgdark: "#273746",
        bglight: "#9DB2BF",
        cusT: "#DDE6ED",
        oth: "#526D82"
      }
    },
  },
  plugins: [],
}
