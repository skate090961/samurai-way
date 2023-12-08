  import {axiosInstance} from "./axiosInstance";
import {AxiosResponse} from "axios";

export const authAPI = {
    async me() {
        const response: AxiosResponse<ResponseType<AuthMeDataType>> = await axiosInstance.get('auth/me')
        return response.data
    },
    async login(login: LoginParamsType) {
        const response: AxiosResponse<ResponseType<{ userId: number }>> =
            await axiosInstance.post('auth/login', login)
        return response.data
    },
    async logout() {
        const response: AxiosResponse<ResponseType> = await axiosInstance.delete('auth/login')
        return response.data
    }
}

//types
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
export type AuthMeDataType = {
    id: number | null
    email: string | null
    login: string | null
}
type ResponseType<T = {}> = {
    data: T
    resultCode: number
    messages: string[]
    fieldsErrors: {field: string, error: string}[]
}