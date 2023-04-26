/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: { ...colors, amber: colors.amber, emerald: colors.emerald },
    extend: []
  },
  plugins: []
};
