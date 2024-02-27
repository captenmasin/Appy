import React, { createContext, useContext, useState, useEffect } from 'react';
import StorageManager from "../../services/StorageManager";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        // Check token existence and validity on app launch
        checkToken();
    }, []);

    const checkToken = async () => {
        try {
            const token = await StorageManager.getData('api_user_token');
            if (token) {
                // Optionally verify token's validity with the backend
                setUserToken(token);
            }
        } catch (e) {
            // Handle error
        }
    };

    const login = async (newToken) => {
        await StorageManager.setData('api_user_token', newToken);
        setUserToken(newToken);
    };

    const logout = async () => {
        await StorageManager.removeData('api_user_token');
        setUserToken(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn: !!userToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
