import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#132440',
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
export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>
            <Text style={styles.text}> Name: John Doe</Text>
            <Text style={styles.text}> Email: john.doe@example.com</Text>
            <Text style={styles.text}> Phone: 123-456-7890</Text>
            <Text style={styles.text}> Address: 123 Main St, Anytown, USA</Text>
        </View>
    );
}