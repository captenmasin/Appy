import React, {useState} from 'react';
import {Platform, Text, TextInput, View} from "react-native";
import {useAuth} from "../global/AuthProvider";
import ApiService from "../../services/ApiService";
import {router} from "expo-router";
import Button from "../global/Button";

const LoginForm = () => {
    const {isLoggedIn, login, logout} = useAuth();

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
                secureTextEntry={true}
                className={"border-2 border-black w-48 my-4"}
                value={password}
                placeholder="Password..."
            />

            <Button onPress={submitLoginForm} variant="blue">Login</Button>

            <Text>{message}</Text>
        </View>
    );
}

export default LoginForm;
