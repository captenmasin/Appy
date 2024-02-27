import {useState} from "react";
import fetchWrapper from "../helpers/api";
import {Pressable, Text, View} from "react-native";
import Button from "../components/global/Button";

export default function Page() {
    const [data, setData] = useState<any>(null);

    const fetchData = async () => {
        return await fetchWrapper('hello').then((data) => setData(data.message))
    };

    const [pressed, setPressed] = useState(false);
    return (
        <View>
            {data === null ? null : <Text>{data}</Text>}
            <Button variant='red' onPress={() => setPressed(!pressed)}>
                {pressed ? 'Yay!' : 'Press me!'}
            </Button>

            <Button onPress={fetchData}>
                Fetch data from API
            </Button>
        </View>
    );
}
