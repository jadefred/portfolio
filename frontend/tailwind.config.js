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
        linkedinBlue: "#0e76a8",
        transparentBlack: "rgba(78, 78, 78, 0.8)",
      },
      animation: {
        slide: "slide 300ms ease-in-out both",
        ping: "ping 0.8s ease-in-out infinite both",
        overlay: "overlay 150ms linear",
        overlayBlack: "overlayBlack 150ms linear",
        slideTop: "slideTop 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both",
      },
      keyframes: {
        slide: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0px)", opacity: "100" },
        },
        ping: {
          "0%": { transform: "scale(0.2)", opacity: "0.8" },
          "80%": { transform: "scale(1.2)", opacity: "0" },
          "100%": { transform: "scale(1.2)", opacity: "0" },
        },
        overlay: {
          "0%": { backgroundColor: "rgba(255, 255, 255, 0.25)" },
          "100%": { backgroundColor: "rgba(255, 255, 255, 1)" },
        },
        overlayBlack: {
          "0%": { backgroundColor: "rgba(78, 78, 78, 0.25)" },
          "100%": { backgroundColor: "rgba(78, 78, 78, 0.8)" },
        },
        slideTop: {
          "0%": { color: "rgba(0, 0, 0, 0)", transform: "translateY(0)" },
          "100%": { color: "rgba(0, 0, 0, 1)", transform: "translateY(-100px)" },
        },
      },
      spacing: {
        "1.5px": "1.5px",
        "3px": "3px",
        "7px": "7px",
        "13px": "13px",
        "38px": "38px",
        "130px": "130px",
        "250px": "250px",
        "280px": "280px",
        "40%": "40%",
        "56.25%": "56.25%",
        "9.5rem": "9.5rem"
      },
    },
  },
  plugins: [],
};
