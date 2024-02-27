import React from "react";
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import Navbar from "../components/global/Navbar";

import "../styles.css";
import {Slot} from "expo-router";
import {Head} from "expo-router/build/head/ExpoHead.android";
import Provider = Head.Provider;
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function Layout() {
    return (
        <Provider>
            <SafeAreaProvider>
                <SafeAreaView>
                    <Navbar/>
                    <Slot/>
                    <StatusBar style="dark"/>
                </SafeAreaView>
            </SafeAreaProvider>
        </Provider>

        // <View>
        //     <StatusBar/>
        //     <Navbar/>
        //     <Slot />
        // </View>
    );
}
