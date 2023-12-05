import {axiosInstance} from "./axiosInstance";
import {PhotosType} from "./users-api";
import {AxiosResponse} from "axios";

export const dialogsAPI = {
    async getDialogs() {
        const response: AxiosResponse<DialogType[]> = await axiosInstance.get('dialogs')
        return response.data
    },
    async getMessages(userId: number) {
        const response:AxiosResponse<MessagesResponseType> = await axiosInstance.get(`dialogs/${userId}/messages`)
        return response.data
    }
}

export type DialogType = {
    id: number
    userName: string
    hasNewMessages: boolean
    lastDialogActivityDate: Date
    lastUserActivityDate: Date
    newMessagesCount: number
    photos: PhotosType
}

export type MessagesResponseType = {
    items: MessageType[]
    totalCount: number
    error: any
}

export type MessageType = {
    id: string
    body: string
    translatedBody: any
    addedAt: Date
    senderId: number
    senderName: string
    recipientId: number
    viewed: boolean
}
