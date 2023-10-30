import { TamaguiProvider, Theme } from 'tamagui'
import config from 'tamagui.config'
import React, { ReactNode } from 'react'
import useThemeStore from '@/store/useThemeStore'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

interface ThemeConfigProps {
  children: ReactNode
}

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const { currentTheme } = useThemeStore()

  return (
    <Animated.View
      entering={FadeIn.duration(350)}
      exiting={FadeOut.duration(350)}
      key={currentTheme}
      style={{ flex: 1 }}
    >
      <TamaguiProvider config={config}>
        <Theme name={currentTheme}>{children}</Theme>
      </TamaguiProvider>
    </Animated.View>
  )
}

export default ThemeConfig
