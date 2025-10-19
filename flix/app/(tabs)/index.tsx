import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function NativeWindTest() {
  return (
    <View className="flex-1 bg-gray-100 dark:bg-gray-900 p-4">
      <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        NativeWind Test
      </Text>
      
      <View className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
        <Text className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          This is a test card with Tailwind CSS classes
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          Dark mode support is working!
        </Text>
      </View>
      
      <TouchableOpacity className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-6 py-3 rounded-lg mb-4">
        <Text className="text-white font-semibold text-center">
          Primary Button
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="bg-gray-200 dark:bg-gray-700 px-6 py-3 rounded-lg">
        <Text className="text-gray-800 dark:text-gray-200 font-semibold text-center">
          Secondary Button
        </Text>
      </TouchableOpacity>
      
      <View className="mt-4 flex-row space-x-2">
        <View className="w-4 h-4 bg-red-500 rounded-full"></View>
        <View className="w-4 h-4 bg-green-500 rounded-full"></View>
        <View className="w-4 h-4 bg-blue-500 rounded-full"></View>
        <View className="w-4 h-4 bg-yellow-500 rounded-full"></View>
      </View>
    </View>
  );
}