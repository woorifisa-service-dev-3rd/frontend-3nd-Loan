/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '30p': '30%',
        '35p': '35%',
        '65p': '65%',
        '80p': '80%',
      },
      fontFamily: {
        sans: ['Uridaum', 'sans-serif'], // Uridaum을 기본 sans-serif로 설정
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        progress: {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
      },
      animation: {
        scaleIn: 'scaleIn 1s ease-in-out',
        scaleOut: 'scaleOut 1s ease-in-out',
        progress: 'progress 2s linear',
      },
    },
  },
  plugins: [],
};
