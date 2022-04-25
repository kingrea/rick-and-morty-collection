module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/validators/*.js"
  ],
  theme: {
    extend: {  
      colors: {
        room: {
        100: '#383475',
        200: '#343363',
        300: '#140941',
        400: '#0e0c38',
        500: '#08012c',
        600: '#2B2668',
        700: '#444294'
        },
        info: {
          100: '#70307a',
          200: '#49226a',
          300: '#441B6D'
        }
      },
      fontFamily: {
        akshar: ["Akshar", "sans-serif"],
        marker: ["Permanent Marker", "sans-serif"],
        mono: ["Roboto Mono", "monospace"]
      },
    },
  },
  plugins: [],
}
