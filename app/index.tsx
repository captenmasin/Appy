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
            <Button text={pressed ? 'Yay!' : 'Press me!'} variant='red' onPress={() => setPressed(!pressed)} />
            <Button text={'Fetch data from API'} onPress={fetchData} />
        </View>
    );
}
