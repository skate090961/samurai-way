import { AxiosResponse } from "axios"
import { axiosInstance } from "./axiosInstance"

export const securityAPI = {
  async getCaptcha() {
    const response: AxiosResponse<{ url: string }> = await axiosInstance.get("security/get-captcha-url")
    return response.data.url
  },
}
