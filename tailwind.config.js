/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1366px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'bullpen': ['bullpen', 'serif'],
        'kalam': ['kalam', 'sans-serif'],
        'homemade': ['homemade', 'serif'],
      },
      dropShadow: {
        'custom': '1px 4px 3px rgba(100, 102, 292, 0.5)',
        'customimg': '-8px -8px 0px #DDDDDD',
        'custom2': '1px 4px 3px #DDDDDD',

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg,rgba(214,139,219,0.9010197829131653) 31%, rgba(148,146,233,0.8085828081232493) 100%)',
      },
    },
  },
  plugins: [],
}