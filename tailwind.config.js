/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
"primary": "#1e40af",
"secondary": "#e6e6e6",
"accent": "#37CDBE",
"neutral": "#3D4451",
"base-100": "#FFFFFF",
"info": "#3ABFF8",
"success": "#36D399",
"warning": "#FBBD23",
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}