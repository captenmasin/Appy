import {Platform, Text, TextInput, View} from "react-native";
import Button from "../components/global/Button";
import {useState} from "react";
import StorageManager from "../services/StorageManager";
import ApiService from "../services/ApiService";
import {useAuth} from "../components/global/AuthProvider";
import {router} from "expo-router";

export default function Page() {
    const { isLoggedIn, login, logout } = useAuth();

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLoginForm = async () => {
        return await ApiService.request('sanctum/token', {
            method: 'POST',
            body: {
                email: email,
                password: password,
                device_name: Platform.OS,
            }
        }).then(async (response) => {
            if (!response.success) {
                setMessage('Invalid credentials');
                return;
            } else {
                login(response.data.token);
                router.replace('/user');
            }
        });
    }

    return (
        <View>
            <TextInput
                onChangeText={setEmail}
                className={"border-2 border-black w-48 my-4"}
                value={email}
                placeholder="Email..."
            />
            <TextInput
                onChangeText={setPassword}
                className={"border-2 border-black w-48 my-4"}
                value={password}
                placeholder="Password..."
            />

            <Button onPress={() => submitLoginForm()} variant="blue">Login</Button>

            <Text>{message}</Text>
        </View>
    );
}
