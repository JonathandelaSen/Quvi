import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  prefix: '',
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
      transparent: 'rgba(255,255,255,0)',
      'bg-qvs': '#18181b',
      background: '#15202b'
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
