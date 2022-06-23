import axios from "axios";

export const BASE_URL = ''

export const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})
