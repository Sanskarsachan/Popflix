import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// Arrow function component
// const Onboarding = () => {
//     return (<View style={styles.container}>
//         <Text>Hello There this is onboarding screen</Text>
//     </View>);
// };

// export default Onboarding;

//Regular function component
export default function Onboarding() {
    return (
        <View style={styles.container}>
            <Text>Hello There this is onboarding screen</Text>
        </View>
    );
}