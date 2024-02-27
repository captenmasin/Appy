import {useState} from "react";
import {Text, View} from "react-native";
import Button from "../components/global/Button";
import ApiService from "../services/ApiService";

export default function Page() {
    const [data, setData] = useState<any>(null);

    const fetchData = async () => {
        const result = await ApiService.request('hello')
        setData(result.data.message)
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
