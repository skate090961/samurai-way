import { axiosInstance } from "./axiosInstance"
import { PhotosType } from "./users-api"
import { AxiosResponse } from "axios"

export const dialogsAPI = {
  async getDialogs() {
    const response: AxiosResponse<DialogType[]> = await axiosInstance.get("dialogs")
    return response.data
  },
  async getMessages(userId: number, page: number = 1, count: number = 8) {
    const response: AxiosResponse<MessagesResponseType> = await axiosInstance.get(
      `dialogs/${userId}/messages?page=${page}&count=${count}`,
    )
    return response.data
  },
  async updateDialogs(userId: number) {
    const response: AxiosResponse<ResponseType> = await axiosInstance.put(`dialogs/${userId}`)
    return response.data
  },
  async sendMessage(userId: number, body: string) {
    const response: AxiosResponse<ResponseType<{ message: ExtendedMessageType }>> = await axiosInstance.post(
      `dialogs/${userId}/messages`,
      { body },
    )
    return response.data
  },
  async removeMessage(messageId: string) {
    const response: AxiosResponse<ResponseType> = await axiosInstance.delete(`dialogs/messages/${messageId}`)
    return response.data
  },
  async getNewMessagesCount() {
    const response: AxiosResponse<number> = await axiosInstance.get("dialogs/messages/new/count")
    return response.data
  },
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

export type ExtendedMessageType = MessageType & {
  recipientName: string
  deletedBySender: boolean
  deletedByRecipient: boolean
  isSpam: boolean
  distributionId: null | number
}

type ResponseType<D = {}> = {
  data: D
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}
