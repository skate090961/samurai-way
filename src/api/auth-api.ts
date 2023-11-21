import {axiosInstance} from "./axiosInstance";

export const authAPI = {
    async getAuthMe(): Promise<AuthResponseType> {
        const authMe = await axiosInstance.get('/auth/me')
        return authMe.data
    }
}

//types
export type AuthMeDataType = {
    id: number | null
    email: string | null
    login: string | null
}

type AuthResponseType = {
    data: AuthMeDataType
    resultCode: number
    messages: string[]
}