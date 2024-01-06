/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        zoom: "zoom 0.2s linear",
      },
    },
  },
  plugins: [],
}
