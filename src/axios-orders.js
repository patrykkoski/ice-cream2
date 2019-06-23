import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ice-cream-app-d8782.firebaseio.com/'
});

export default instance;