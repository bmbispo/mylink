import axios from 'axios';

export const key = '8227d420de7f6cc42c6f2db2ea1f0c0629f2b751';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    } 
})

export default api;