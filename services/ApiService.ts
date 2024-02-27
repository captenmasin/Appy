import env from "../helpers/env";
import StorageManager from "./StorageManager";

interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: HeadersInit;
}

class ApiService {
    static async request(endpoint: string, options: FetchOptions = {}): Promise<any> {
        const url = `${env('API_URL')}/${endpoint}`;
        const headers = new Headers({
            'Content-Type': 'application/json',
            'app-token': env('API_TOKEN'),
            ...options.headers,
        });

        const config: RequestInit = {
            method: options.method || 'GET',
            headers: headers,
            body: options.body ? JSON.stringify(options.body) : null,
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                console.error('Fetch error:', data);
            }

            return { success: response.ok, statusCode: response.status , data };
        } catch (error) {
            console.error('Network error:', error);
            throw error;
        }
    }

    static async authRequest(endpoint: string, options: FetchOptions = {}): Promise<any> {
        const token = await StorageManager.getData('api_user_token');
        options.headers ={
            Authorization: `Bearer ${token}`,
            ...options.headers,
        };

        return await this.request(endpoint, {
            ...options,
        });
    }
}

export default ApiService;
