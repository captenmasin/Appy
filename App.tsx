import React, {useEffect, useState} from "react";
import axios from "axios";
import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import fetchWrapper from "./helpers/api";

axios.defaults.headers.common['app-token'] = '123456789'

export default function App() {

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchWrapper('hello');
                setData(result.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const [pressed, setPressed] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text>{data}</Text>
            <Pressable onPress={() => setPressed(!pressed)}>
                {pressed ? <Text>Yay!</Text> : <Text>Press me!</Text>}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
