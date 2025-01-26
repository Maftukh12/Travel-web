/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'travel-primary': '#2563eb',
        'travel-secondary': '#1d4ed8',
      },
    },
  },
  plugins: [],
}