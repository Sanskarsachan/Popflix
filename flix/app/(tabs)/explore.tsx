import  {View,Text } from  'react-native'
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#132440',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    header: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    text:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding: 10
    }
});
export default function Explore() {
    return (
        <View style={styles.container} >
            <Text style={styles.header}>Explore</Text>
            <Text style={styles.text}> Movies: Avengers, Batman, Superman</Text>
            <Text style={styles.text}> TV Shows: The Office, Friends, Seinfeld</Text>
            <Text style={styles.text}> Books: The Great Gatsby, To Kill a Mockingbird, 1984</Text>
            <Text style={styles.text}> Games: The Witcher, The Last of Us, The Legend of Zelda</Text>
            <Text style={styles.text}> Music: The Beatles, The Rolling Stones, The Who</Text>
            <Text style={styles.text}> Art: The Mona Lisa, The Starry Night, The Scream</Text>
        </View>
    );
}