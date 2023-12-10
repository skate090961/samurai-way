import { axiosInstance } from "./axiosInstance"

export const usersAPI = {
  async getUsers(pageSize: number, currentPage: number): Promise<UsersResponseType> {
    const users = await axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`)
    return users.data
  },
}

//type
export type PhotosType = {
  small: string
  large: string
}
export type UserType = {
  name: string
  id: number
  uniqueUrlName: string
  photos: PhotosType
  status: string
  followed: boolean
}
type UsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string
}
