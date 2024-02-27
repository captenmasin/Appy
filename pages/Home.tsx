import {useState} from "react";
import fetchWrapper from "../helpers/api";
import {Pressable, Text, View} from "react-native";

export default function Home() {
    const [data, setData] = useState<any>(null);

    const fetchData = async () => {
        return await fetchWrapper('hello').then((data) => setData(data.message))
    };

    const [pressed, setPressed] = useState(false);
    return (
        <View>
            {data === null ? null : <Text>{data}</Text>}
            <Pressable onPress={() => setPressed(!pressed)}>
                {pressed ? <Text className="bg-red-500">Yay!</Text> : <Text className="bg-blue-500">Press me!</Text>}
            </Pressable>
            <Pressable onPress={fetchData}>
                <Text>Fetch data from API</Text>
            </Pressable>
        </View>
    );
}
