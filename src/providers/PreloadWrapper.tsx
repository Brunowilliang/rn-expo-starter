import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { SplashScreen } from 'expo-router'

SplashScreen.preventAutoHideAsync()

const Fonts = {
  Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
  InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  MontserratSemiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
  MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
  MontserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
}

const PreloadWrapper = (Component: React.ComponentType<any>) => {
  return function PreloadComponent(props: any): React.ReactNode {
    const [loaded, error] = useFonts(Fonts)

    useEffect(() => {
      if (error) {
        console.error(error)
      } else if (loaded) {
        SplashScreen?.hideAsync()
      }
    }, [loaded, error])

    if (!loaded) return null

    return <Component {...props} />
  }
}

export default PreloadWrapper
