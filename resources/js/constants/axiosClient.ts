import axios from 'axios';

export const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

console.log(`Base url ${baseURL}`);

export const axiosClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});