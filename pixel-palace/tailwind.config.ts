import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor:{
        ' green-950': '#023107',
      },
      colors: {
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
  screens: {
    xs: { minWidth: 0 }, 
    sm: { minWidth: 576 },
    md: { minWidth: 768 },
    lg: { minWidth: 992 },
    xl: { minWidth: 1200 },
  },
  utilities: {
    
  },
}
export default config
