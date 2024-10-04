 

import svgToDataUri from 'mini-svg-data-uri';
import defaultTheme from 'tailwindcss/defaultTheme';

const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      transitionTimingFunction: {
        elastic:
          'linear(0 0.01%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)'
      },
      zIndex: {
        navbar: '999',
        footer: '999'
      },
      colors: {
        primary: {
          main: '#234CAD'
        },
        secondary: {
          main: '#FFCB30'
        },
        theme: {
          light: '#E7E7E7',
          dark: '#14002A'
        }
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(45deg, rgba(16,0,34,1) 0%, rgba(26,0,54,1) 100%)',
        'light-gradient': 'linear-gradient(39deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)'
      },
      boxShadow: {
        smooth: '0px 20px 100px rgba(0, 0, 0, 0.1)'
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'gradient-first': 'moveVertical 30s ease infinite',
        'gradient-second': 'moveInCircle 20s reverse infinite',
        'gradient-third': 'moveInCircle 40s linear infinite',
        'gradient-fourth': 'moveHorizontal 40s ease infinite',
        'gradient-fifth': 'moveInCircle 20s ease infinite'
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)'
          }
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)'
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)'
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)'
          }
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(180deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '50%': {
            transform: 'translateY(50%)'
          },
          '100%': {
            transform: 'translateY(-50%)'
          }
        }
      }
    }
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="40" height="40" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    }
  ]
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}
