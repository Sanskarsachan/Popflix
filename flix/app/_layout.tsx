import { Stack } from "expo-router";
import "./globals.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#132440' }}>
      <StatusBar style="dark" />
      <Stack screenOptions={{
        headerShown: false,
      }} />
    </SafeAreaView>
  );
}
