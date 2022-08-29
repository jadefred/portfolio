/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "468px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    fontFamily: {
      sans: ["Raleway", "system-ui"],
      display: ["Cormorant Garamond"],
    },
    extend: {
      colors: {
        bgColor: "#fffcf2",
      },
    },
  },
  plugins: [],
};
