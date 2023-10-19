import { styled, Input as TextInput } from 'tamagui'

// @ts-ignore
export const Input = styled(TextInput, {
  fontFamily: '$medium',
  fontSize: '$h4',
  color: '$text',
  placeholderTextColor: '$text',
  backgroundColor: '$white',
  borderColor: '$text',
  borderWidth: 1,
  borderRadius: 10,
  w: '$full',
  h: 56,
  px: 16,

  pressStyle: {
    borderColor: '$blue',
    borderWidth: 2,
  },
  focusStyle: {
    borderColor: '$blue',
    borderWidth: 2,
  },
})
