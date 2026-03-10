/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
     colors: {
        primary: '#1e3a8a', // Dark blue
        secondary: '#f59e0b', // Gold
        accent: '#3b82f6', // Bright blue
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
