/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'team-stadium': "url('/src/assets/team-stadium.webp')",
        'real-stadium': "url('/src/assets/real-stadium.jpg')",
      },
    },
  },
  plugins: [],
};
