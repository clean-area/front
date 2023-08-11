/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSansKr: ['var(--notoSansKr)'], // 다음과 같이 배열 안에 string으로 작성합니다.
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'body-0': '#3A3A3C',
        'white-0': '#F5F5F5',
        'blue-0': '#3592FF',
        'blue-2': '#82C3FF',
        'gray-1': '#F8F8FB',
        'gray-2': '#F2F2F7',
        'gray-4': '#D1D1D6',
        'gray-7': '#8E8E93',
      },
      animation: {
        dungsil_1: 'dungsil 1.1s infinite linear',
        dungsil_2: 'dungsil 1.3s infinite linear',
        dungsil_3: 'dungsil 1.5s infinite linear',
      },
      keyframes: {
        dungsil: {
          '0%, 100%': { transform: 'translate(0%,10%)' },
          '50%': { transform: 'translate(0%,20%)' },
        },
      },
    },
  },
  plugins: [],
};
