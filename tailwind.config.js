/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'custom': '500px',
        
         // Custom breakpoint for 1000px
      },
    },
  },
  plugins: [],
};
