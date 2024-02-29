import {Platform} from "react-native";
import * as SecureStore from 'expo-secure-store';

class StorageManager {
    static async getItem(name: string, defaultValue: any = null): Promise<any> {
        if (Platform.OS === 'web') {
            const data = localStorage.getItem(name);
            return data === null ? defaultValue : JSON.parse(data);
        } else {
            return await SecureStore.getItemAsync(name) || defaultValue;
        }
    }

    static async setItem(name: string, data: any = null): Promise<void> {
        if (Platform.OS === 'web') {
            localStorage.setItem(name, JSON.stringify(data));
        } else {
            await SecureStore.setItemAsync(name, JSON.stringify(data));
        }
    }

    static async deleteItem(name: string): Promise<void>{
        if (Platform.OS === 'web') {
            localStorage.removeItem(name);
        } else {
            await SecureStore.deleteItemAsync(name)
        }
    }
}

export default StorageManager;
