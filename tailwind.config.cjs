/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1232px",
    },
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontSize: {
        "3xl": ["2rem", "2.75rem"],
        "4xl": ["2.5rem", "3.25rem"],
        "6xl": ["3.25rem", "4.25rem"],
      },
      width: {
        100: "24rem",
        "4xl": "50rem",
      },
      height: {
        120: "32.75rem",
      },
      minWidth: (theme) => theme("width"),
      maxWidth: (theme) => theme("width"),
      colors: {
        background: '#FAF7ED',
        secondary: '#D99079',
        gray: '#191919',
        brown: '#816E66',
        peach: {
          400: '#FFC8BA',
          500: '#D99079',
          600: '#E9C3B3',
        },
      },
    },
  },
  plugins: [],
};
