import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type Themes = 'light' | 'dark' | 'purple'

type ThemeState = {
  themes: Themes[]
  currentTheme: Themes
  selectTheme: (theme: Themes) => void
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themes: ['light', 'dark', 'purple'],
      currentTheme: 'light',
      selectTheme: (theme: Themes) => set({ currentTheme: theme }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default useThemeStore
