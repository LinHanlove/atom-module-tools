/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './lib/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './docs/**/*.md'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  important:true
}
