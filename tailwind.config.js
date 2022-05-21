module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#1e8c08",

          "secondary": "#c8c6ff",

          "accent": "#76e29d",

          "neutral": "#171A2B",

          "base-111": "#ffffff",

          "info": "#6C8CE5",

          "success": "#7AEBAD",

          "warning": "#A8830B",

          "error": "#ED1D4A",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}