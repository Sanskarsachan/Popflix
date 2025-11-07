import { Link } from "expo-router";
import { Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import useFetchMovies from "../../hooks/useFetch";

export default function MovieList({ query = "" }: { query?: string }): React.ReactNode {
    const { movies, loading, error, hasMore, loadMore } = useFetchMovies(query);

    const renderItem = ({ item }: any) => (
        <View className="w-1/2 px-2 mb-4">
            <Link href={`/movies/${item.imdbID}`}>
                <View className="bg-black/40 rounded-xl overflow-hidden">
                    {item.Poster && item.Poster !== "N/A" ? (
                        <Image
                            source={{ uri: item.Poster }}
                            style={{ width: "100%", aspectRatio: 2 / 3 }}
                            resizeMode="cover"
                        />
                    ) : (
                        <View style={{ width: "100%", aspectRatio: 2 / 3 }} className="items-center justify-center bg-gray-800">
                            <Text className="text-gray-400">No Image</Text>
                        </View>
                    )}
                    <View className="p-3">
                        <Text className="text-white font-semibold" numberOfLines={1}>
                            {item.Title}
                        </Text>
                        <Text className="text-gray-400 text-xs mt-1">{item.Year} • {item.Type}</Text>
                    </View>
                </View>
            </Link>
        </View>
    );

    if (!!error && movies.length === 0) {
        return (
            <View className="py-6 px-4 bg-red-900/40 border border-red-600 rounded-xl">
                <Text className="text-red-200 text-center">{error}</Text>
            </View>
        );
    }

    if (query.trim().length === 0) {
        return (
            <View className="py-10 items-center">
                <Text className="text-gray-300">Search for a movie to begin</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.imdbID}
            numColumns={2}
            columnWrapperStyle={{ paddingHorizontal: 8 }}
            contentContainerStyle={{ paddingBottom: 24 }}
            renderItem={renderItem}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (hasMore && !loading) loadMore();
            }}
            ListFooterComponent={() => (
                (hasMore || loading) && movies.length > 0 ? (
                    <View className="mt-2 mb-6 items-center">
                        <TouchableOpacity
                            disabled={loading}
                            onPress={loadMore}
                            className="px-4 py-2 rounded-lg border border-gray-600 bg-black/30"
                        >
                            <Text className="text-white">{loading ? "Loading more..." : "Load more"}</Text>
                        </TouchableOpacity>
                    </View>
                ) : null
            )}
            ListEmptyComponent={loading ? (
                <View className="py-10 items-center">
                    <ActivityIndicator size="large" color="#BF092F" />
                    <Text className="text-gray-300 mt-3">Loading...</Text>
                </View>
            ) : null}
        />
    );
}
