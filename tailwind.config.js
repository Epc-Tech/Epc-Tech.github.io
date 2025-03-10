/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        Text: "#ffffff",
        Background: "#020109",
        Primary: "#1ccef2",
        Secondary: "#1347f1",
        Accent: "#ce0d5e",
        newAccent: "#f13757",
      },
      fontFamily: {
        Inter: ["Inter", "serif"],
        RobotoFlex: ["Roboto Flex", "serif"],
        Karla: ["Karla", "serif"],
        Overpass: ["Overpass", "sans-serif"],
      },
      screens: {
        375: "375px",
        425: "425px",
        500: "500px",
      },
      animation: {
        spinning: "spinning 1s ease-in-out infinite",
      },
      keyframes: {
        spinning: {
          "100%": {
            transform: "rotate(260deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
