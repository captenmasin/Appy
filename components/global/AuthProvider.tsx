import React, { createContext, useContext, useState, useEffect } from 'react';
import StorageManager from "../../services/StorageManager";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [isAuthCheckComplete, setIsAuthCheckComplete] = useState(false);

    useEffect(() => {
        checkToken().finally(() => {
            setIsAuthCheckComplete(true);
        });
    }, []);

    const checkToken = async () => {
        try {
            const token = await StorageManager.getItem('api_user_token');
            if (token) {
                // Optionally verify token's validity with the backend
                setUserToken(token);
            }
        } catch (e) {
            // Handle error
        }
    };

    const login = async (newToken: string) => {
        await StorageManager.setItem('api_user_token', newToken);
        setUserToken(newToken);
    };

    const logout = async () => {
        await StorageManager.deleteItem('api_user_token');
        setUserToken(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn: !!userToken, isAuthCheckComplete, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
