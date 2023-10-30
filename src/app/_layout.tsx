import 'react-native-gesture-handler'

import PreloadWrapper from '@/providers/PreloadWrapper'
import ThemeConfig from '@/config/ThemeConfig'
import { Stack } from 'expo-router'

const Layout = () => {
  return <Stack screenOptions={{ headerShown: false }} />
}

export default ThemeConfig(PreloadWrapper(Layout))
