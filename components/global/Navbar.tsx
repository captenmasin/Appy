import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function Navbar() {
    return (
        <View className={"mb-4 flex bg-green-500"}>
            <Text>Navbar hereeeeeee</Text>
            <Link href="/">Home</Link>
            <Link href="/hello">Hello</Link>
        </View>
    );
}
