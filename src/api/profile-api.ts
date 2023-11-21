import {axiosInstance} from "./axiosInstance";
import {PhotosType} from "./users-api";

export const profileAPI = {
    async getUserProfile(userId: number): Promise<ProfileResponseType> {
        const profile = await axiosInstance.get(`/profile/${userId}`)
        return profile.data
    }
}

//types
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