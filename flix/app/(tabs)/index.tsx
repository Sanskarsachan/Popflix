import { useState } from "react";
import { View } from "react-native";
import Search from "../components/searchbar";
import MovieList from "../components/movlist";
import Header from "../components/header";
export default function Index() {
  
  return (
    <View className="flex-1">
      <Header />
    </View>
  );
}
