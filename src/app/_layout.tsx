import React from 'react'
import FontProvider from '@/providers/FontProvider'
import { SplashScreen, Stack } from 'expo-router'
import ThemeConfig from '@/config/ThemeConfig'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  return (
    <ThemeConfig>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeConfig>
  )
}

const EnhancedRootLayout = FontProvider(RootLayout)

const Layout = () => {
  return <EnhancedRootLayout />
}

export default Layout
