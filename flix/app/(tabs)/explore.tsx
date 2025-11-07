import { View, Text } from 'react-native'
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Search from '../components/searchbar';
import MovieList from '../components/movlist';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    header: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding: 10
    }
});
export default function Explore() {
    const [query, setQuery] = useState<string>("");

    const handleSearch = async () => {
        setQuery((prev) => prev.trim());
    };
    return (
        <View className="flex-1">
            <View className='pt-4 items-center'>
                <Text className='text-2xl font-bold text-center text-white'>Explore</Text>
            </View>
            <Search value={query} onChangeText={setQuery} onSubmit={handleSearch} />
            <MovieList query={query} />
        </View>
    );
}