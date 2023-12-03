import {axiosInstance} from "./axiosInstance";
import {PhotosType} from "./users-api";

export const profileAPI = {
    async getUserProfile(userId: number): Promise<ProfileResponseType> {
        const profile = await axiosInstance.get(`profile/${userId}`)
        return profile.data
    },
    async getProfileStatus(userId: number) {
        const status = await axiosInstance.get(`profile/status/${userId}`)
        return status.data
    },
    async updateProfileStatus(status: string): Promise<ProfileStatusResponseType> {
        const response = await axiosInstance.put(`profile/status/`, {status})
        return response.data
    }
}

//types
type ProfileStatusResponseType = {
    resultCode: number
    messages: string[]
    data: string
}

type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}
export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    userId: number
    photos: PhotosType
    fullName: string
}