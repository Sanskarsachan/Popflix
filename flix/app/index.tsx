import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-gray-900 p-4">
      <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to Popflix! 🎬
      </Text>
      <Text className="text-gray-600 dark:text-gray-400 text-center">
        Edit app/index.tsx to edit this screen.
      </Text>
      <View className="mt-6 bg-blue-500 px-6 py-3 rounded-lg">
        <Text className="text-white font-semibold">
          NativeWind is working! ✨
        </Text>
      </View>
    </View>
  );
}
