import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Search from "../components/searchbar";
import MovieList from "../components/movlist";

export default function Index() {
  const [query, setQuery] = useState<string>("");

  const handleSearch = async () => {
    setQuery((prev) => prev.trim());
  };

  return (
    <ScrollView className="flex-1 bg-brand-navy">
      <View className="p-6">
        <Search value={query} onChangeText={setQuery} onSubmit={handleSearch} />
        <MovieList query={query} />
      </View>
    </ScrollView>
  );
}
