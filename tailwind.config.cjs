const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
        heading: ['Fraunces Variable'],
      },
      colors: {
        'dark-cyan': 'hsl(179 81% 29%)',
        'dark-grey-blue': 'hsl(215 19% 25%)',
        'pale-orange': 'hsl(25 94% 86%)',
        'light-cream': 'hsl(43 78% 98%)',
        grey: 'hsl(215 5% 54%)',
      },
    },
  },
  plugins: [
    plugin(function ({ theme, addBase }) {
      addBase({
        h1: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: '4.5rem',
          lineHeight: '4.5rem',
          fontWeight: '900',
        },
        h2: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: '2.5rem',
          lineHeight: '3rem',
          fontWeight: '900',
        },
        h3: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: '2rem',
          lineHeight: '2.25rem',
          fontWeight: '900',
        },
        h4: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: '900',
        },
        button: {
          width: '217px',
          height: '56px',
          borderRadius: '6px',
          backgroundColor: theme('colors.dark-cyan'),
          color: theme('colors.light-cream'),
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: '#66D2CF',
          },
          '&:disabled': {
            backgroundColor: '#E2DEDB',
          },
        },
      })
    }),
  ],
}
