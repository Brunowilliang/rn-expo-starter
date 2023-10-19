import React, { FC, useEffect, ReactElement } from 'react'
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

interface Props {}

const FontProvider = (WrappedComponent: FC<Props>): FC<Props> => {
  return function FontWrappedComponent(props: Props): ReactElement | null {
    const [loaded, error] = useFonts(Fonts)

    useEffect(() => {
      if (error) {
        console.error(error)
      }
    }, [error])

    useEffect(() => {
      if (loaded) {
        SplashScreen?.hideAsync()
      }
    }, [loaded])

    if (!loaded) return null

    return <WrappedComponent {...props} />
  }
}

export default FontProvider
