import { View, TextInput } from "react-native";''
import Ionicons from '@expo/vector-icons/Ionicons';

type SearchProps = {
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
};

export default function Search({ value, onChangeText, onSubmit }: SearchProps): React.ReactNode {
    return (
        <View className="relative">
        <View className="absolute left-4 top-1/2 -translate-y-1/2">
            <Ionicons name="search" size={20} color="text-brand-9CA3AF" />
        </View>
        <View className="m-4">
            <TextInput
                placeholder='search for a movie here'
                className='bg-white text-brand-9CA3AF px-4 py-2 rounded-lg'
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
                returnKeyType="search"
            />
        </View>
        </View>
    );
}