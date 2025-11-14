import { useMemo, type ReactNode } from "react";
import { View, Image, Text } from "react-native";

const USER_NAME = "John Doe";

function selectGreeting(date: Date): string {
  const hour = date.getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function Header(): ReactNode {
  const now = useMemo(() => new Date(), []);
  const greeting = useMemo(() => selectGreeting(now), [now]);
  const formattedDate = useMemo(
    () =>
      Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }).format(now),
    [now]
  );

  return (
    <View className="pt-12 pb-8">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="w-14 h-14 rounded-2xl bg-white/10 items-center justify-center border border-white/10">
            <Image
              source={require("../../assets/images/Popflixlogo.png")}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </View>
          <View className="ml-4">
            <Text className="text-gray-300 text-xs uppercase tracking-[2px]">
              {formattedDate}
            </Text>
            <Text className="text-white text-3xl font-bold mt-1">
              {greeting}, {USER_NAME.split(" ")[0]}
            </Text>
          </View>
        </View>
        <View className="items-center">
          <View className="w-14 h-14 rounded-full bg-white/10 border border-white/20 items-center justify-center">
            <Image
              source={require("../../assets/images/favicon.png")}
              className="w-10 h-10 rounded-full"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-300 text-xs mt-2">{USER_NAME}</Text>
        </View>
      </View>
      <View className="mt-8 bg-white/5 rounded-3xl p-5 border border-white/10">
        <Text className="text-white text-2xl font-semibold">
          Tonight&apos;s highlights
        </Text>
        <Text className="text-gray-300 mt-2 leading-5">
          Explore fresh releases, trending hits, and hidden gems curated just
          for you.
        </Text>
      </View>
    </View>
  );
}