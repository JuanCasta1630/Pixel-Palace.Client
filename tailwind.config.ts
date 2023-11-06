import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-dark': 'linear-gradient(163deg, #111827 10%, #111827 90%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor:{
       ' green-950': '#023107',
      },
      colors: {
        custom_red: '#FF6B6B',
        primary: '#08F60A',
        black: '#000',
        white: '#fff',
        green: {
          '50': '#e8ffe5',
          '100': '#cbffc7',
          '200': '#9aff95',
          '300': '#5bfe58',
          '400': '#29f427',
          '500': '#08f60a',
          '600': '#01af06',
          '700': '#06850c',
          '800': '#0b6910',
          '900': '#0f5815',
          '950': '#023107',
      },
      
      }
    },
  },
  plugins: [],
}
export default config
