/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Main: "#FFC0CB",
        Secondary: "#b19c5b",
        Third: "#2a2f42",
        Fourth: "#424B8C",
      },
    },
  },
  plugins: [],
};
