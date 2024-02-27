import React from "react";
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import Navbar from "./components/global/Navbar";
import Home from "./pages/Home";

import "./styles.css";

export default function App() {
    return (
        <View>

            <StatusBar />
            <Navbar />
            <Home />
        </View>
    );
}
