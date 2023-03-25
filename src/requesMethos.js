import axios from "axios";
// this is the last url -> http://localhost:5000
const BASE_URL = 'https://shop-backend-node.onrender.com'


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

