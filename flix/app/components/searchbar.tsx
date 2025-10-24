import { View, TextInput } from "react-native";
export default function Search (): React.ReactNode {
    return(
        <View className="mb-4">
        <TextInput placeholder='search for a movie here' className='bg-white text-9CA3AF'/>
        </View>
    )
}