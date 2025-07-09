/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
       awlaGreen: '#B5E61D',   // Vert vif du logo
    primary: '#1D3557',     // Bleu foncé
    gold: '#FFD166',        // Or
    dark: '#232323',        // Noir profond
    neutral: '#555555',     // Gris neutre
    light: '#F5F5F5',       // Gris clair
    white: '#FFFFFF',
    
      },
    },
  },
  plugins: [],
}
