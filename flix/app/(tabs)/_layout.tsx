import { Tabs } from "expo-router"
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#BF092F',
                tabBarInactiveTintColor: '#9CA3AF',
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    left: 10,
                    right: 10,
                    bottom: 16,
                    height: 64,
                    marginHorizontal: 15,
                    borderRadius: 16,
                    backgroundColor: '#000',
                    borderTopWidth: 0,
                    paddingTop: 8,
                    paddingBottom: 8,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.12,
                    shadowRadius: 12,
                    elevation: 12,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'compass' : 'compass-outline'} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="watchlist"
                options={{
                    title: 'Watchlist',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}