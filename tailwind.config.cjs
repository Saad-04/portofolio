/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'por': '#0ef',
        'porbg':'#1f242d',
        'msgbg':'90deg, rgba(33,40,2,0.9374519455600793) 100%, rgba(0,212,255,1) 100%'
      },
      boxShadow: {'porsh':`box-shadow: -1px -1px 95px -16px rgba(8,255,235,0.75);
      -webkit-box-shadow: -1px -1px 95px -16px rgba(8,255,235,0.75);
      -moz-box-shadow: -1px -1px 95px -16px rgba(8,255,235,0.75);`}
    },
      screens: {
        'xs':'350px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    
  },
  plugins: [],
}
