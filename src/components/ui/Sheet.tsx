import { Stack, styled } from '@tamagui/core'
import { createSheet } from '@tamagui/sheet'
import { ScrollView } from 'tamagui'

// @ts-ignore
const Handle = styled(Stack, {
  bg: '$white',
  h: 5,
  w: 80,
  alignSelf: 'center',
  my: 15,
  borderRadius: 5,
})

const Overlay = styled(Stack, {
  bg: '$overlay',
  position: 'absolute',
  w: '100%',
  h: '100%',
  animation: 'modal',
  enterStyle: { opacity: 1 },
  exitStyle: { opacity: 0 },
})

// @ts-ignore
const Frame = styled(Stack, {
  bg: '$white',
  w: '100%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
})

// const ScrollView = styled(Scroll, {})

export const Sheet = createSheet({
  Frame,
  Handle,
  Overlay,
  ScrollView,
})

// how to use?
// <Sheet
//   open={true}
//   // onOpenChange={setOpen}
//   animation={'modal'}
//   forceRemoveScrollEnabled
//   // dismissOnSnapToBottom
//   snapPointsMode="percent"
//   snapPoints={[30, 90]}
// >
//   <Sheet.Frame>
//     <Sheet.Handle />
//     <Sheet.ScrollView>
//       <Text h2 bold mb={10}>
//         Stack
//       </Text>
//       <Text h2 bold mb={10}>
//         Stack
//       </Text>
//       <Text h2 bold mb={10}>
//         Stack
//       </Text>
//     </Sheet.ScrollView>
//   </Sheet.Frame>
// </Sheet>
