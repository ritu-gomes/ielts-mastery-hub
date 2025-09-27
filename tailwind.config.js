import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8", // Professional blue
          secondary: "#6b7280", // Neutral gray
          accent: "#22c55e", // Green
          neutral: "#f3f4f6", // Light background
          "base-100": "#ffffff", // White for cards
          "base-200": "#f9fafb", // Light gray for sections
          "base-300": "#d1d5db", // Darker gray for footer
        },
      },
    ],
  },
}

