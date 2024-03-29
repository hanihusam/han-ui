const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

const systemFontsMonospace = "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace, monospace"

const fonts = {
  monospace: systemFontsMonospace,
  sansSerif: `"Poppins", "Ubuntu", ${systemFonts}`,
  serif: "Georgia, 'Times New Roman', Times, serif"
}

const typography = {
  fonts,
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  },
  lineHeights: {
    xs: '1rem',
    sm: '1.25rem',
    base: '1.5rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': 1,
    '6xl': 1,
    '7xl': 1,
    '8xl': 1,
    '9xl': 1,
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: '1.5rem',
    relaxed: 1.625,
    loose: '2'
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
}

export default typography
