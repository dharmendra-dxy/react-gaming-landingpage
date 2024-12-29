/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sanf-sarif'], 
        general: ['general', 'sanf-sarif'],
        'circular-web': ['circular-web', 'sanf-sarif'],
        'robert-medium': ['robert-medium', 'sanf-serif'],
        'robert-regular': ['robert-regular', 'sanf-serif'],
      }
    },
  },
  plugins: [],
}