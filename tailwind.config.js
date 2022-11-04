/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%, 100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
        },
      },
      transitionProperty: {
        grow: "grow 3s ease-in-out",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
