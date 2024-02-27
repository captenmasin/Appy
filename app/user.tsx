import {Text, View} from "react-native";
import Button from "../components/global/Button";
import ApiService from "../services/ApiService";
import {useEffect, useState} from "react";
import {Image} from "expo-image";

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    const loadUser = async () => {
        try {
            const response = await ApiService.authRequest('user');
            console.log(response);
            setUser(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <View>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : null}

            {!user && !isLoading ? (
                <Button onPress={() => loadUser()}>Load user?</Button>
            ) : null}

            {user && !isLoading ? (
                <>
                    <View className={"flex-row items-center gap-4"}>
                        <Image
                            source={user.avatars.original}
                            className={"w-12 h-12 rounded-full ring-1 ring-slate-900/10"}
                            contentFit="cover"
                            transition={1000}
                        />
                        <View>
                            <Text>{user.name}</Text>
                            <Text>@{user.username}</Text>
                        </View>
                    </View>
                </>
            ) : null}
        </View>
    );
}
