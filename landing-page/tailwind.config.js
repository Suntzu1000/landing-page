/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Open Sans",
      secondary: "Lato",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: "#14532d",
        secondary: "#166534",
        accent: {
          primary: "#3f6212",
          primary_hover: "#365314",
          secondary: "#4ade80",
          secondary_hover: "#22c55e",
          tertiary: "#bef264",
        },
      },
    },
  },
  plugins: [],
};
