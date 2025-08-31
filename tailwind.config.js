/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: {
        neon: '#00F6FF',
        neon2: '#6B7CFF',
        panel: '#0E1322'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.10)'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } }
      },
      animation: { float: 'float 6s ease-in-out infinite' }
    },
  },
  plugins: [],
}
