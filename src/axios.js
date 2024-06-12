import axios from 'axios';

export const baseURL =
   window.location.hostname === 'localhost'
      ? 'http://localhost:4444'
      : 'https://restromaster-backend-1.onrender.com';

const instance = axios.create({
   baseURL,
});

instance.interceptors.request.use((config) => {
   config.headers.Authorization = window.localStorage.getItem('token');
   return config;
});

export default instance;
