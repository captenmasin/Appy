import {Text, View} from "react-native";
import {Link, usePathname} from "expo-router";
import {useAuth} from "./AuthProvider";

export default function Navbar() {
    const {isLoggedIn, login, logout} = useAuth();
    const currentPathname = usePathname();
    const routes = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Hello',
            path: '/hello',
        },
        {
            name: 'Login',
            path: '/login',
            enabled: !isLoggedIn,
        },
        {
            name: 'Logout',
            path: '/logout',
            action: logout,
            enabled: isLoggedIn,
        },
        {
            name: 'User',
            path: '/user',
            enabled: isLoggedIn,
        }
    ]

    const enabledRoutes = routes.filter(route => route.enabled !== false);

    return (
        <View className={'mb-4'}>
            <View className={"flex px-4 py-2 flex-row justify-between bg-green-500"}>
                <View className={'flex flex-row gap-x-4'}>
                    {enabledRoutes.map((route, index) => (
                        route.action ?
                            <Text key={index} onPress={route.action} className={'cursor-pointer'}>{route.name}</Text> :
                            <Link key={index} href={route.path}>
                                <Text className={currentPathname === route.path ? 'font-bold' : ''}>{route.name}</Text>
                            </Link>
                    ))}
                </View>
                <View>
                    {isLoggedIn ? <Text>Logged in</Text> : <Text>Logged out</Text>}
                </View>
            </View>
        </View>
    );
}
