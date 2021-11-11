const { colors, shadows } = require('@hanihusam/han-core')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'han-white': colors.white,
        'han-black': colors.black,
        'han-grey': {
          DEFAULT: colors.grey['400'],
          ...colors.grey
        },
        'han-orange': {
          DEFAULT: colors.orange['100'],
          ...colors.orange
        },
        'han-blue': {
          DEFAULT: colors.blue['700'],
          ...colors.blue
        }
      },
      boxShadow: {
        single: shadows.single,
        double: shadows.double
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['Menlo', ...defaultTheme.fontFamily.mono]
      }
    }
  }
}
