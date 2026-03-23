/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#97CA09",
        secondary: "#74808E",
        "text-color": "#858587",
      },
    },
  },
  plugins: [],
};
