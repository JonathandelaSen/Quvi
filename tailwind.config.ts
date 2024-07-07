import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: {
        lightest: '#fceaf4',
        lighter: '#FBCFE8',
        light: '#F9A8D4',
        DEFAULT: '#ff2d7f',
        dark: '#ff156f',
        darker: '#d3105b',
        darkest: '#8c0c3d'
      },
      white: '#FFFFFF',
      black: '#000',
      transparent: 'rgba(255,255,255,0)'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
