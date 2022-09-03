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
      },
      animation: {
        slide: "slide 300ms ease-in-out both",
        ping: "ping 0.8s ease-in-out infinite both",
        jello: "jello 0.9s both",
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
        jello: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
      },
      spacing: {
        "7px": "7px",
        "13px": "13px",
        "38px": "38px",
      },
      backgroundImage: {
        githuboutline: "url('/src/assets/images/github-outline.svg')",
      },
    },
  },
  plugins: [],
};
