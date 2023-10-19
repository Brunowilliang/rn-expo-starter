import {
  Text,
  XStack,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'

import * as Icon from '@expo/vector-icons'

export const ButtonContext = createStyledContext({
  variant: 'primary' as 'primary' | 'outline',
})

// @ts-ignore
export const ButtonFrame = styled(XStack, {
  name: 'Button',
  context: ButtonContext,
  height: 56,
  width: '$full',
  gap: 10,
  borderRadius: 10,
  animation: 'lazy',
  borderWidth: 0,
  alignItems: 'center',
  justifyContent: 'center',
  bg: '$primary',
  pressStyle: {
    scale: 0.98,
    opacity: 0.8,
  },

  variants: {
    variant: {
      primary: {
        bg: '$primary',
      },
      outline: {
        bg: '$transparent',
        borderWidth: 2,
        borderColor: '$primary',
      },
    },
  } as const,
})

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  fontFamily: '$semibold',
  fontSize: '$h3',
  color: '$white',

  variants: {
    variant: {
      primary: {
        color: '$white',
      },
      outline: {
        color: '$primary',
      },
    },
  } as const,
})

// @ts-ignore
const ButtonIcon = styled(Icon.AntDesign, {
  context: ButtonContext,
  color: '$white',
  size: 34,

  variants: {
    variant: {
      primary: {
        color: '$white',
      } as any,
      outline: {
        color: '$primary',
      } as any,
    },
  } as const,
})

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
})
