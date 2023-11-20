import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '10108ea5-6cc3-4f89-b416-ca568878f10f'
    }
})