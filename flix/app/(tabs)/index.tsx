import { useState } from "react";
import { View } from "react-native";
import Search from "../components/searchbar";
import MovieList from "../components/movlist";

export default function Index() {
  const [query, setQuery] = useState<string>("");

  const handleSearch = async () => {
    setQuery((prev) => prev.trim());
  };

  return (
    <View className="flex-1">
      <Search value={query} onChangeText={setQuery} onSubmit={handleSearch} />
      <MovieList query={query} />
    </View>
  );
}
