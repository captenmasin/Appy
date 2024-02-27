import {Text, View} from "react-native";
import {Link, usePathname} from "expo-router";

export default function Navbar() {
    const routes = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Hello',
            path: '/hello',
        }
    ]

    return (
        <View className={'mb-4'}>
            <View className={"flex px-4 py-2 gap-x-4 flex-row bg-green-500"}>
                {routes.map((route, index) => (
                    <Link key={index} href={route.path}>
                        <Text className={usePathname() === route.path ? 'font-bold' : ''}>{route.name}</Text>
                    </Link>
                ))}
            </View>
        </View>
    );
}
