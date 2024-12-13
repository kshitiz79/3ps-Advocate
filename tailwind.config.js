/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      boxShadow: {
        all: "0 4px 10px rgba(0, 0, 0, 0.2)", // Default dark shadow
        "white-xl": "0 4px 10px rgba(255, 255, 255, 0.6)", // White shadow
        "white-2xl": "0 4px 14px rgba(255, 255, 255, 0.8)", // Stronger white shadow
      },
      keyframes: {
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        upDown: 'bounceUpDown 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}