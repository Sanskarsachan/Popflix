import { View, TextInput } from "react-native";

type SearchProps = {
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
};

export default function Search({ value, onChangeText, onSubmit }: SearchProps): React.ReactNode {
    return (
        <View className="mb-4">
            <TextInput
                placeholder='search for a movie here'
                className='bg-white text-brand-9CA3AF px-4 py-2 rounded-lg'
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
                returnKeyType="search"
            />
        </View>
    );
}