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
        title: '#1C1C1E',
        'body-0': '#3A3A3C',
        'white-0': '#F5F5F5',
        'blue-0': '#3592FF',
        'blue-1': '#E8F5FF',
        'blue-2': '#82C3FF',
        'blue-4': '#1277EF',
        'gray-1': '#F8F8FB',
        'gray-2': '#F2F2F7',
        'gray-4': '#D1D1D6',
        'gray-7': '#8E8E93',
        'gray-8': '#48484A',
        'purple-1': '#E8E4FF',
        'purple-3': '#9D8EFE',
        'yellow-1': '#FFF4DA',
        'yellow-5': '#EEAA00',
        'danger-1': '#FF3B30',
        'profile-1': '#D9D9D9',
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
