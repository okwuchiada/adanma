/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTertiary: '#FF3399',
        primaryBlue: '#45062E',
        primarySecondary: '#FBFFFE'
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
        'french': ['"IM Fell French Canon SC"', 'serif'],
        mont: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
