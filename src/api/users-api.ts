import {axiosInstance} from "./axiosInstance"

export const usersAPI = {
    async getUsers(pageSize: number, currentPage: number) {
        const users = await axiosInstance.get<ResponseUsersType>(`users?count=${pageSize}&page=${currentPage}`)
        return users.data
    }
}

//type
type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: PhotosType,
    status: string
    followed: boolean
}

type ResponseUsersType = {
    items: UserType[]
    totalCount: number
    error: string
}