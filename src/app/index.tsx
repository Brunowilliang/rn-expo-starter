import React from 'react'
import { Container, Stack } from '@/components/ui/Stacks'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import useThemeStore from '@/store/useThemeStore'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { Tabs } from '@/components/ui/Tabs'

export default function Page() {
  const { themes, selectTheme, currentTheme } = useThemeStore()

  return (
    <>
      <Container safeArea f={1} pt={30} bg={'$bgColor'}>
        <Tabs tabLabels={['Tab 10', 'Tab 2', 'Tab 3']}>
          <Stack f={1} centered>
            <Text>Conteúdo da Tab 1</Text>
          </Stack>
          <Stack f={1} centered>
            <Text>Conteúdo da Tab 2</Text>
          </Stack>
          <Stack f={1} centered>
            <Text>Conteúdo da Tab 3</Text>
          </Stack>
        </Tabs>

        <Stack w={'$full'} gap={10} centered px={16}>
          <Text h2 semibold>
            Select Theme
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
