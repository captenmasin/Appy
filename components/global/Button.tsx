import {Pressable, PressableProps, Text} from "react-native";
import {Slot} from "expo-router";

interface ButtonProps extends PressableProps {
    onPress: () => void,
    children?: any,
    variant?: string,
}

export default function Button({children, onPress, variant = 'default'}: ButtonProps){
    const baseParentStyles: string = "focus:ring-4 border rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none"
    const baseTextStyles: string = "text-white font-medium text-sm"

    const getButtonVariation = (variant: string) => {
        switch (variant) {
            case 'default':
                return 'bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-100';
            case 'blue':
                return 'bg-blue-700 border-blue-700 hover:bg-blue-800 focus:ring-blue-300';
            case 'dark':
                return 'bg-gray-700 border-gray-700 hover:bg-gray-800 focus:ring-gray-300';
            case 'green':
                return 'bg-green-700 border-green-700 hover:bg-green-800 focus:ring-green-300';
            case 'red':
                return 'bg-red-700 border-red-700 hover:bg-red-800 focus:ring-red-300';
            case 'yellow':
                return 'bg-yellow-700 border-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300';
        }
    };

    const getTextVariant = (variant: string) => {
        switch (variant) {
            case 'default':
                return 'text-gray-900';
            case 'blue':
            case 'dark':
            case 'green':
            case 'red':
            case 'yellow':
                return 'text-white';
        }
    };

    const buttonStyles: string = baseParentStyles + ' ' + getButtonVariation(variant);
    const textStyles: string = baseTextStyles + ' ' + getTextVariant(variant);
    return (
        <Pressable onPress={onPress} className={`${buttonStyles}`}>
            <Text className={`${textStyles}`}>{children}</Text>
        </Pressable>
    );
}
