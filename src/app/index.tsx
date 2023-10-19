import React from 'react'
import { Container, Stack } from '@/components/ui/Stacks'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import useThemeStore from '@/store/useThemeStore'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

export default function Page() {
  const { themes, selectTheme, currentTheme } = useThemeStore()

  return (
    <>
      <Container safeArea hideKeyboard f={1} pt={30} bg={'$bgColor'}>
        <Stack w={'$full'} gap={10} centered px={16}>
          <Text h2 bold>
            App demo
          </Text>

          {themes.map((theme) => {
            return (
              <Button
                variant="primary"
                key={theme}
                onPress={() => selectTheme(theme)}
              >
                {theme === currentTheme && (
                  <Button.Icon name="check" size={22} />
                )}
                <Button.Text>{capitalizeFirstLetter(theme)}</Button.Text>
              </Button>
            )
          })}
        </Stack>
      </Container>
    </>
  )
}
