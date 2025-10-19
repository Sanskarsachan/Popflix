import { Link } from "expo-router";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
      <View className="p-6">
        <Link className="mb-8" href="/auth/onboarding">
          <Text className="text-brand-ocean text-2xl font-bold text-center">Go to Login Screen</Text>
        </Link>
        <Text className="text-brand-crimson text-2xl font-bold mb-8 text-center">Movies</Text>
        <View className="flex-col gap-8 border-2 border-brand-ocean rounded-lg p-4">
          <Link href="/movies/Avengers">
            <Text className="text-brand-ocean text-2xl font-bold">Avengers</Text>
          </Link>
          <Link href="/movies/Nobody">
            <Text className="text-brand-ocean text-2xl font-bold">Nobody</Text>
          </Link>
          <Link href="/movies/DemonSlayer">
            <Text className="text-brand-ocean text-2xl font-bold">Demon Slayer</Text>
          </Link>
          <Link href="/movies/TheDarkKnight">
            <Text className="text-brand-ocean text-2xl font-bold">The Dark Knight</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
