/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'team-stadium': "url('/src/assets/team-stadium.png')",
        'real-stadium': "url('/src/assets/real-stadium.jpg')",
        'player-card': "url('/src/assets/placeholder-card.webp')",
        'position': "url('/src/assets/pos_base.png')",
      },
    },
  },
  plugins: [],
};
