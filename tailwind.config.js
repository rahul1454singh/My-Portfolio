/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#166534',
        'accent-green': '#22c55e',
        'text-dark': '#0f172a',
        'text-gray': '#475569',
      }
    },
  },
  plugins: [],
}
