import { View, Text } from 'react-native'
import React from 'react'

export default function Highlights() {
  return (
    <View className="mt-8 bg-white/5 rounded-3xl border border-white/10 p-4 mx-4">
    <Text className="text-white text-2xl font-semibold">
      Tonight&apos;s highlights
    </Text>
    <Text className="text-gray-300 mt-2 leading-5">
      Explore fresh releases, trending hits, and hidden gems curated just
      for you.
    </Text>
  </View>
  )
}