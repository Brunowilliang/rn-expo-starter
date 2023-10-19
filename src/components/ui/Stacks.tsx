import { SafeAreaView } from 'react-native-safe-area-context'
import { styled, Stack as Box, YStack, XStack } from 'tamagui'
import { Keyboard } from 'react-native'

const defaultVariants = {
  hideKeyboard: {
    true: {
      onPressOut: Keyboard.dismiss,
    },
  },
  centered: {
    true: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
} as const

// @ts-ignore
export const Container = styled(SafeAreaView, {
  name: 'Container',
  acceptsClassName: true,
  edges: [],

  variants: {
    safeArea: {
      true: {
        edges: ['top', 'bottom'],
      },
    },
    safeTop: {
      true: {
        edges: ['top'],
      },
    },
    safeBottom: {
      true: {
        edges: ['bottom'],
      },
    },
    ...defaultVariants,
  } as const,
})

// @ts-ignore
export const Stack = styled(Box, {
  name: 'Stack',
  acceptsClassName: true,
  variants: {
    ...defaultVariants,
  } as const,
})

export const VStack = styled(YStack, {
  name: 'VStack',
  acceptsClassName: true,
  variants: {
    ...defaultVariants,
  } as const,
})

export const HStack = styled(XStack, {
  name: 'HStack',
  acceptsClassName: true,
  variants: {
    ...defaultVariants,
  } as const,
})
