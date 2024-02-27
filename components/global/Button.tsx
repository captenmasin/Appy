import {Pressable, PressableProps, Text} from "react-native";

interface ButtonProps extends PressableProps {
    onPress: () => void,
    variant?: string,
    text: string
}

export default function Button({onPress, variant, text}: ButtonProps){
    const styleClass = variant === 'red' ? 'bg-red-500' : 'bg-blue-500';
    return (
        <Pressable onPress={onPress} className={styleClass + " " + "text-white px-4 py-2 rounded-sm"}>
            <Text className={'text-white'}>{text}</Text>
        </Pressable>
    );
}
