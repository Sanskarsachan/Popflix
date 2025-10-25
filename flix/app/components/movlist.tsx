import { Link } from "expo-router";
import { Text, View, Image } from "react-native";
import { type OmdbSearchItem } from "../../services/omdb";

export default function MovieList({ movies }: { movies: OmdbSearchItem[] }): React.ReactNode {
    const uniqueMovies = movies.filter(
        (item, index, self) => self.findIndex((s) => s.imdbID === item.imdbID) === index
    );

    return (
        <View className="flex-row flex-wrap -mx-2">
            {uniqueMovies.map((item) => (
                <View key={item.imdbID} className="w-1/2 px-2 mb-4">
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
            ))}
        </View>
    );
}
