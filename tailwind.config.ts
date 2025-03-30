import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B5C2B',
          50: '#E6F0E6',
          100: '#C2D9C2',
          200: '#9EC29E',
          300: '#7AAB7A',
          400: '#569456',
          500: '#2B5C2B',
          600: '#234A23',
          700: '#1B371B',
          800: '#122512',
          900: '#0A120A',
        },
        secondary: {
          DEFAULT: '#F5A623',
          50: '#FEF3E3',
          100: '#FDE7C7',
          200: '#FBCF8F',
          300: '#F9B757',
          400: '#F5A623',
          500: '#D68C0F',
          600: '#A86B0C',
          700: '#7A4D09',
          800: '#4C2F05',
          900: '#1E1202',
        },
        'gray-3c': '#3C3C4399',
        'black-00': '#0000000D',
        'black-14': '#14171F',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      screens: {
        'mobile': {'max': '768px'},
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
      },
    },
  },
  plugins: [],
}

export default config 