import {useEffect, useState} from 'react';
import { useAuth } from '../components/global/AuthProvider';
import {router, useRouter} from 'expo-router';

const useRedirectUnauthenticated = () => {
    const { isLoggedIn, isAuthCheckComplete } = useAuth();

    useEffect(() => {
        if (isAuthCheckComplete && !isLoggedIn) {
            return router.replace('/login');
        }
    }, [isAuthCheckComplete]);
};

export default useRedirectUnauthenticated;
