import type { ReactNode } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import type { ListRenderItem } from "react-native";
import { Link } from "expo-router";
import useTrendingMovies from "../../hooks/useTrending";
import type { TmdbMovie } from "../../services/tmdb";

export default function Banners(): ReactNode {
  const { movies, loading, error, refetch } = useTrendingMovies("week");

  const getPosterUri = (posterPath?: string | null) => {
    if (!posterPath) return undefined;
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  const getDisplayTitle = (item: TmdbMovie) => {
    return item.title ?? item.name ?? item.original_title ?? item.original_name ?? "Untitled";
  };

  const getDisplayYear = (item: TmdbMovie) => {
    const rawDate = item.release_date ?? item.first_air_date ?? "";
    return rawDate ? new Date(rawDate).getFullYear().toString() : "";
  };

  const renderItem: ListRenderItem<TmdbMovie> = ({ item }) => {
    const posterUri = getPosterUri(item.poster_path);
    return (
      <Link href={`/movies/${item.id}`} asChild>
        <TouchableOpacity activeOpacity={0.8} className="mr-4">
          <View className="w-40 overflow-hidden rounded-2xl bg-black/40 border border-white/10">
            {posterUri ? (
              <Image
                source={{ uri: posterUri }}
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
                {getDisplayTitle(item)}
              </Text>
              <Text className="text-gray-400 text-xs mt-1">{getDisplayYear(item)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  if (!!error && movies.length === 0) {
    return (
      <View className="mt-6 px-4 py-5 rounded-2xl border border-red-600 bg-red-900/40">
        <Text className="text-red-200 font-medium mb-2">We couldn&apos;t load trending movies.</Text>
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
        <Text className="text-white text-xl font-semibold">Trending Now</Text>
        {loading && movies.length > 0 ? (
          <ActivityIndicator size="small" color="#BF092F" />
        ) : null}
      </View>
      {loading && movies.length === 0 ? (
        <View className="py-8 items-center">
          <ActivityIndicator size="large" color="#BF092F" />
          <Text className="text-gray-300 mt-3">Loading trending titles...</Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          horizontal
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 4 }}
        />
      )}
    </View>
  );
}