import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "https://fakestoreapi.com",
    withCredentials: true,
});

export default API;