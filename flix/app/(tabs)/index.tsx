import { useEffect, useState } from "react";
import { Text, View, ScrollView, ActivityIndicator, Image } from "react-native";
import { searchMovies, type OmdbSearchResponse } from "../../services/omdb";
import Search from "../components/searchbar";
import MovieList from "../components/movlist";

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
          <MovieList movies={uniqueSearchItems} />
        )}
      </View>
    </ScrollView>
  );
}
