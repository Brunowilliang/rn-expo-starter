import { tokens } from './tokens'

// export const themes = {
//   dark: {
//     bgColor: tokens.color.bgDark,

//     blue: tokens.color.blue,
//     blueAlpha: tokens.color.blueAlpha,

//     text: tokens.color.textDark,
//   },
//   light: {
//     bgColor: tokens.color.bgLight,

//     blue: tokens.color.blue,
//     blueAlpha: tokens.color.blueAlpha,

//     text: tokens.color.textLight,
//   },
//     purple: {
//     bgColor: tokens.color.bgPurple,

//   },
// }

const light = {
  bgColor: tokens.color.bgLight,

  primary: tokens.color.blue,
  primaryAlpha: tokens.color.blueAlpha,

  text: tokens.color.textLight,

  white: tokens.color.white,
}

type BaseTheme = typeof light

const dark: BaseTheme = {
  bgColor: tokens.color.bgDark,

  primary: tokens.color.blue,
  primaryAlpha: tokens.color.blueAlpha,

  text: tokens.color.textDark,

  white: tokens.color.black,
}

const purple: BaseTheme = {
  bgColor: tokens.color.bgPurple,

  primary: tokens.color.purple,
  primaryAlpha: tokens.color.purpleAlpha,

  text: tokens.color.textPurple,

  white: tokens.color.white,
}

export const themes = {
  dark,
  light,
  purple,
}

// type ThemeName = keyof typeof allThemes

// type Themes = {
//   [key in ThemeName]: BaseTheme
// }

// export const themes: Themes = allThemes
