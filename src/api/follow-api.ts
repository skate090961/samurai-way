import {axiosInstance} from "./axiosInstance";

export const followAPI = {
    async getFollow(userId: number): Promise<boolean> {
        const isFollow = await axiosInstance.get(`follow/${userId}`)
        return isFollow.data
    },
    async follow(userId: number): Promise<FollowResponseType> {
        const follow = await axiosInstance.post(`follow/${userId}`)
        return follow.data
    },
    async unFollow(userId: number): Promise<FollowResponseType> {
        const unFollow = await axiosInstance.delete(`follow/${userId}`)
        return unFollow.data
    }
}

//type
type FollowResponseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}