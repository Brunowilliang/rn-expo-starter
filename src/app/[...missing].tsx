import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Stacks'
import { Text } from '@/components/ui/Text'
import { useRouter } from 'expo-router'
import React from 'react'

export default function Page() {
  const router = useRouter()

  return (
    <Container f={1} centered bg={'$bgColor'}>
      <Text h2 bold>
        Not found
      </Text>

      <Button variant="primary" onPress={() => router.back()}>
        <Button.Text>Back to home</Button.Text>
      </Button>
    </Container>
  )
}
