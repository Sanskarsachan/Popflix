import { ScrollView } from "react-native";
import Header from "../components/header";
import Banners from "../components/banners";
import Highlights from "../components/highlights";
export default function Index() {
  return (
    <ScrollView className="flex-1 bg-brand-navy">
      <Header />
      <Highlights />
      <Banners />
    </ScrollView>
  );
}
