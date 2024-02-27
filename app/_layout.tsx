import React from "react";
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import Navbar from "../components/global/Navbar";
import "../styles.css";
import {Slot} from "expo-router";
import {Head} from "expo-router/build/head/ExpoHead.android";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {AuthProvider} from "../components/global/AuthProvider";

export default function Layout() {
    return (
        <AuthProvider>
            <SafeAreaProvider>
                <SafeAreaView>
                    <Navbar/>
                    <View className={"container mx-auto p-4"}>
                        <Slot/>
                    </View>
                    <StatusBar style="dark"/>
                </SafeAreaView>
            </SafeAreaProvider>
        </AuthProvider>

        // <View>
        //     <StatusBar/>
        //     <Navbar/>
        //     <Slot />
        // </View>
    );
}
