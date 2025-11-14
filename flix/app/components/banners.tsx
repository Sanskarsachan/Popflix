import type { ReactNode } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import useDiscoverMovies from "../../hooks/useDiscover";

export default function Banners(): ReactNode {
  const { movies, loading, error, refetch } = useDiscoverMovies();

  const renderItem = ({ item }: any) => {
    const hasPoster = item.Poster && item.Poster !== "N/A";
    return (
      <Link href={`/movies/${item.imdbID}`} asChild>
        <TouchableOpacity activeOpacity={0.8} className="mr-4">
          <View className="w-40 overflow-hidden rounded-2xl bg-black/40 border border-white/10">
            {hasPoster ? (
              <Image
                source={{ uri: item.Poster }}
                resizeMode="cover"
                style={{ width: "100%", aspectRatio: 2 / 3 }}
              />
            ) : (
              <View className="w-full aspect-[2/3] items-center justify-center bg-gray-800">
                <Text className="text-gray-400 text-sm text-center px-2">No artwork</Text>
              </View>
            )}
            <View className="p-3">
              <Text className="text-white font-semibold" numberOfLines={1}>
                {item.Title}
              </Text>
              <Text className="text-gray-400 text-xs mt-1">{item.Year}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  if (!!error && movies.length === 0) {
    return (
      <View className="mt-6 px-4 py-5 rounded-2xl border border-red-600 bg-red-900/40">
        <Text className="text-red-200 font-medium mb-2">We couldn't load featured movies.</Text>
        <Text className="text-red-200/80 text-sm mb-4">{error}</Text>
        <TouchableOpacity
          onPress={refetch}
          className="self-start px-4 py-2 rounded-lg bg-red-700/70"
        >
          <Text className="text-white font-semibold text-sm">Try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between px-1 mb-3">
        <Text className="text-white text-xl font-semibold">Featured Movies</Text>
        {loading && movies.length > 0 ? (
          <ActivityIndicator size="small" color="#BF092F" />
        ) : null}
      </View>
      {loading && movies.length === 0 ? (
        <View className="py-8 items-center">
          <ActivityIndicator size="large" color="#BF092F" />
          <Text className="text-gray-300 mt-3">Loading featured titles...</Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          horizontal
          keyExtractor={(item) => item.imdbID}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 4 }}
        />
      )}
    </View>
  );
}