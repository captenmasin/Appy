import {Platform, Text, TextInput, View} from "react-native";
import * as Haptics from 'expo-haptics';
import Button from "../components/global/Button";
import {Image} from "expo-image";
import {useState} from "react";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Page() {
    const [imageUrl, onChangeImageUrl] = useState('https://picsum.photos/seed/696/3000/2000');
    const [text, onChangeText] = useState('ello ello ello');

    return (
        <View>
            <Text>Hello world???????</Text>
            <Button onPress={() => Platform.OS === 'web' ? console.log('click') : Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}>
                Click me babyyyyyy
            </Button>

            <TextInput
                onChangeText={onChangeText}
                className={"border-2 border-black w-48 my-4"}
                value={text}
                placeholder="Placeholder..."
            />

            <Text>{text}</Text>

            <TextInput
                onChangeText={onChangeImageUrl}
                className={"border-2 border-black w-48 my-4"}
                value={imageUrl}
                placeholder="Placeholder..."
            />

            <Image
                source={imageUrl}
                placeholder={blurhash}
                className={"w-96 h-96"}
                contentFit="cover"
                transition={1000}
            />

        </View>
    );
}
