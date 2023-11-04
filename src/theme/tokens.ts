import { createTokens } from 'tamagui'

export const tokens = createTokens({
  color: {
    // background
    bgDark: '#171719', // dark
    bgLight: '#F2F6FC', // light
    bgPurple: '#F5F5FD', // purple

    // text
    textDark: '#969CB2', // dark
    textLight: '#717997', // light
    textPurple: '#B2A8EE', // purple

    // shared
    blue: '#2666DE',
    purple: '#6C63FF',

    blueAlpha: 'rgba(38, 102, 222, 0.50)',
    purpleAlpha: 'rgba(108, 99, 255, 0.50)',

    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.50)',
    transparent: 'transparent',
    success: '#12a454',
    successOpacity: 'rgba(18, 164, 84, 0.5)',
    danger: '#e83f5b',
    dangerOpacity: 'rgba(232, 63, 91, 0.5)',
  },
  space: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
    true: 8,
  },
  size: {
    full: '100%',
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
    true: 8,
  },
  radius: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
  },
  zIndex: {
    base: 0,
    xs: 2,
    sm: 4,
    md: 8,
  },
})
