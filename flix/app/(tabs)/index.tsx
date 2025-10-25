import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, ActivityIndicator, Image } from "react-native";
import { searchMovies, type OmdbSearchResponse } from "../../services/omdb";
import Search from "../components/searchbar";

export default function Index() {
  const [data, setData] = useState<OmdbSearchResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await searchMovies("batman");
        if (!isMounted) return;
        if (res.Response === "False") {
          setError(res.Error ?? "Failed to fetch movies");
        } else {
          setData(res);
        }
      } catch (e: any) {
        if (!isMounted) return;
        setError(e?.message ?? "Unknown error");
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const searchItems = data?.Search ?? [];
  const uniqueSearchItems = searchItems.filter(
    (item, index, self) => self.findIndex((s) => s.imdbID === item.imdbID) === index
  );

  const handleSearch = async () => {
    const q = query.trim();
    setLoading(true);
    setError(null);
    try {
      const res = await searchMovies(q.length > 0 ? q : "batman");
      if (res.Response === "False") {
        setError(res.Error ?? "Failed to fetch movies");
        setData(null);
      } else {
        setData(res);
      }
    } catch (e: any) {
      setError(e?.message ?? "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-brand-navy">
      <View className="p-6">
        {/* <Link className="mb-8" href="/auth/onboarding">
          <Text className="text-white text-2xl font-bold text-center">Go to Login Screen</Text>
        </Link>
        <Text className="text-white text-2xl font-bold mb-4 text-center">Movies</Text> */}
        <Search value={query} onChangeText={setQuery} onSubmit={handleSearch} />
        {loading && (
          <View className="py-10 items-center">
            <ActivityIndicator size="large" color="#BF092F" />
            <Text className="text-gray-300 mt-3">Loading...</Text>
          </View>
        )}

        {!!error && !loading && (
          <View className="py-6 px-4 bg-red-900/40 border border-red-600 rounded-xl">
            <Text className="text-red-200 text-center">{error}</Text>
          </View>
        )}

        {!loading && !error && (
          <View className="flex-row flex-wrap -mx-2">
            {uniqueSearchItems.map((item) => (
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
        )}
      </View>
    </ScrollView>
  );
}
