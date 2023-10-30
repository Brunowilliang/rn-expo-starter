import { TamaguiProvider, Theme } from 'tamagui'
import config from 'tamagui.config'
import React from 'react'
import useThemeStore from '@/store/useThemeStore'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

const ThemeConfig = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { currentTheme } = useThemeStore()

    return (
      <Animated.View
        entering={FadeIn.duration(350)}
        exiting={FadeOut.duration(350)}
        key={currentTheme}
        style={{ flex: 1 }}
      >
        <TamaguiProvider config={config}>
          <Theme name={currentTheme}>
            <Component {...props} />
          </Theme>
        </TamaguiProvider>
      </Animated.View>
    )
  }
}

export default ThemeConfig
