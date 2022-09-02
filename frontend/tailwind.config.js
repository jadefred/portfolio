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
      animation: {
        rotate: "rotate 500ms ease-in-out both",
      },
      keyframes: {
        rotate: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0px)", opacity: "100" },
        },
      },
      spacing: {
        '13px': '13px',
      }
    },
  },
  plugins: [],
};
