import {Pressable, PressableProps, Text} from "react-native";
import {Slot} from "expo-router";

interface ButtonProps extends PressableProps {
    onPress: () => void,
    children?: any,
    variant?: string,
    text?: string
}

export default function Button({children, onPress, variant, text}: ButtonProps){
    const baseParentStyles: string = "px-4 py-2 rounded-sm"
    const baseTextStyles: string = "text-sm"

    const parentStyles: string = variant === 'red' ? 'bg-red-300' : 'bg-blue-300'
    const textStyles: string = variant === 'red' ? 'text-red-900' : 'text-blue-900'
    return (
        <Pressable onPress={onPress} className={`${parentStyles} ${baseParentStyles}`}>
            <Text className={`${baseTextStyles} ${textStyles}`}>{children}</Text>
        </Pressable>
    );
}
