/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'max-md': { 'max': '768px' },
    },
    extend: {
      backgroundImage: {
        "abstract" : "url('/abstract.png')",
      },
      colors: {
        "primary": "#007D48",
        "secondary": "#04BF70",
        "info": "#3AB0FF",
        "bg-success": "#effeef",
        "success": "#0ee00e",
        "bg-warning": "#fefeef",
        "warning": "#e0e00e",
        "bg-error": "#feefef",
        "error": "#e00e0e",
      },
      width: {
        '11.25': '45px',
      },
      height: {
        '15': '70px',
      },
      padding: {
        '7.5': '30px',
      },
      boxShadow: {
        'BS1': '0px 0px 20px rgba(0, 0, 0, 0.01)',
      },
      zIndex: {
        '100': '100',
      },
      gap: {
        '3.75': '15px',
        '7.5': '30px',
        '12.5': '50px',
      },
      spacing: {
        '12.5': '50px',
        '17.5': '70px',
      },
      fontSize: {
        '5.5': '22px',
      },
      borderRadius: {
        '24.75': '99px',
      },
    },
  },
  plugins: [],
};
