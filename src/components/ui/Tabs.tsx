import React, { useState, useRef, useEffect } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'
import { Text } from './Text'
import { HStack, Stack } from './Stacks'
import { useTheme } from 'tamagui'

interface TabProps {
  label: string
  index: number
  scrollX: Animated.SharedValue<number>
  onTabPress: (index: number) => void
  innerSpace: number
}

const TabHeader = ({
  label,
  index,
  scrollX,
  onTabPress,
  innerSpace,
}: TabProps) => {
  const tabStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [
        (index - 1) * windowWidth,
        index * windowWidth,
        (index + 1) * windowWidth,
      ],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    )
    return { opacity }
  })

  return (
    <Stack
      f={1}
      Pressable
      centered
      mx={innerSpace / 2}
      onPress={() => onTabPress(index)}
    >
      <Animated.View style={[tabStyle]}>
        <Text color={'$blue'} semibold zIndex={100}>
          {label}
        </Text>
      </Animated.View>
    </Stack>
  )
}

interface TabsProps {
  height?: number
  containerPadding?: number
  containerRadius?: number
  innerSpace?: number
  tabLabels: string[]
  children: React.ReactNode[]
  initialTab?: number
}

const windowWidth = Dimensions.get('window').width

export const Tabs = ({
  initialTab = 0,
  height = 55,
  containerPadding = 20,
  containerRadius = 14,
  innerSpace = 5,
  tabLabels,
  children,
}: TabsProps) => {
  const [, setActiveTab] = useState(initialTab)
  const scrollViewRef = useRef<Animated.ScrollView>(null)
  const scrollX = useSharedValue(0)
  const theme = useTheme()

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x
    },
  })

  useEffect(() => {
    setActiveTab(initialTab)
    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollTo({
        x: windowWidth * initialTab,
        animated: false,
      })
    })
  }, [])

  const BackgroundIndicator = () => {
    const style = useAnimatedStyle(() => {
      const tabWidth =
        (windowWidth -
          containerPadding * 2 -
          innerSpace * (tabLabels.length + 1)) /
        tabLabels.length
      const translateX = interpolate(
        scrollX.value,
        tabLabels.map((_, i) => i * windowWidth),
        tabLabels.map(
          (_, i) => containerPadding + tabWidth * i + innerSpace * (i + 1),
        ),
      )
      return {
        width: tabWidth,
        transform: [{ translateX }],
      }
    })

    return (
      <Animated.View
        style={[
          style,
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: `${theme.primary.get()}` + '25',
            zIndex: 1,
            borderRadius: containerRadius / 1.2,
            height: height - innerSpace * 2,
            top: innerSpace,
          },
        ]}
      />
    )
  }

  const onTabPress = (index: number) => {
    setActiveTab(index)
    scrollViewRef.current?.scrollTo({ x: windowWidth * index, animated: true })
  }

  return (
    <>
      <HStack
        position={'relative'}
        px={containerPadding}
        borderRadius={containerRadius}
        height={height}
      >
        <HStack
          f={1}
          bg={'$white'}
          height={height}
          borderRadius={containerRadius}
        >
          {tabLabels.map((tab, index) => (
            <TabHeader
              key={`tab-${index}`}
              label={tab}
              index={index}
              scrollX={scrollX}
              onTabPress={onTabPress}
              innerSpace={innerSpace}
            />
          ))}
        </HStack>
        <BackgroundIndicator />
      </HStack>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode={'never'}
      >
        {children.map((child, index) => (
          <Stack key={`content-${index}`} w={windowWidth}>
            {child}
          </Stack>
        ))}
      </Animated.ScrollView>
    </>
  )
}
