/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        pizza: "url(./assets/bg-pizza.jpg)",
      },
    },
  },
  plugins: [],
};
