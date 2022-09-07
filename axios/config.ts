import axios from "axios";

export const fetchApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})