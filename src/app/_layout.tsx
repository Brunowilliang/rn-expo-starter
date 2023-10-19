import { SplashScreen, Stack } from 'expo-router'
import FontProvider from '@/config/FontConfig'
import React from 'react'
import ThemeConfig from '@/config/ThemeConfig'

export { ErrorBoundary } from 'expo-router'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const { loaded } = FontProvider()

  if (!loaded) {
    return null
  }

  return <RootLayout />
}

function RootLayout() {
  return (
    <ThemeConfig>
      <Stack
        screenOptions={{
          animation: 'fade',
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </ThemeConfig>
  )
}
