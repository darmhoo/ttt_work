/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tt-bg': "#0A2640",
      },
      fontFamily: {
        'open-sans': ['open-sans', 'sans-serif'],
        'manrope': ['manrope', 'serif']
      },
      fontSize: {
        '58': "58px",
        '64': "64px",
        "16": "16px",
        "20": "20px"

      },
      lineHeight: {
        '84': '84px'
      }
     
    },
  },
  plugins: [],
}

