import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const convertToJson = async (message) => {
    try {
        const response = await api.post('/api/execute', { message });
        return response.data;
    } catch (error) {
        console.error('Error converting to json:', error);
        throw error;
    }
};

export const fetchRestaurants = async (parameters) => {
    try {
        const response = await api.get('/api/foursquare', { params: parameters });
        return response.data;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
};
