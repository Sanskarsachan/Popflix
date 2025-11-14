import { View, ScrollView } from "react-native";
import Header from "../components/header";
import Banners from "../components/banners";
export default function Index() {
  return (
    <ScrollView className="flex-1 bg-[#132440]">
      <View className="px-4">
        <Header />
        <Banners />
      </View>
    </ScrollView>
  );
}
