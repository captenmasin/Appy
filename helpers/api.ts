import env from "./env";

interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: HeadersInit;
}

const fetchWrapper = async (endpoint: string, options: FetchOptions = {}) => {
    const url = `${env('API_URL')}/${endpoint}`;
    const headers = new Headers({
        'Content-Type': 'application/json',
        'app-token':env('API_TOKEN'),
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
            // Handle HTTP errors
            throw new Error(data.message || 'Server error');
        }

        return data;
    } catch (error) {
        // Handle network errors
        console.error('Fetch error:', error);
        throw error;
    }
};

export default fetchWrapper;
