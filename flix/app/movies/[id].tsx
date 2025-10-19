import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function MovieDetails() {
    const { id } = useLocalSearchParams();
    console.log(id);
    return (
        <View style={styles.container}>
            <Text>Movie Details for {id}</Text>
        </View>
    );
}