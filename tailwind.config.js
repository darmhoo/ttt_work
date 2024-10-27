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
        '56': "56px",
        '64': "64px",
        "16": "16px",
        "20": "20px",
        "48": "48px",
        "28": "28px",
        "96": "96px",


      },
      lineHeight: {
        '84': '84px',
        '72': '72px',
        '56': '56px',
        '48': '48px',
      },
      
     
    },
  },
  plugins: [],
}

