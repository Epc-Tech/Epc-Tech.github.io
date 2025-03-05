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
      },
      fontFamily: {
        Inter: ["Inter", "serif"],
        RobotoFlex: ["Roboto Flex", "serif"],
        Karla: ["Karla", "serif"],
      },
      screens: {
        375: "375px",
        425: "425px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
