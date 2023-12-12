import { AuthMeDataType } from "../../api/auth-api"
import { PhotosType } from "../../api/users-api"
import { updatePhotosAC } from "../profile/profile-reducer"

export type AuthMeDataExtendsType = {
  id: number | null
  email: string | null
  login: string | null
  photos?: PhotosType | null
  newMessagesCount?: number
}

type AuthType = {
  authUserData: AuthMeDataExtendsType
  isAuth: boolean
  captcha: string
}

const initialState: AuthType = {
  authUserData: {
    id: null,
    email: null,
    login: null,
    photos: null,
    newMessagesCount: 0,
  },
  isAuth: false,
  captcha: "",
}

export const authReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "SET-AUTH-USER-DATA":
      return { ...state, authUserData: { ...action.authUser }, isAuth: true }
    case "SET-IS-AUTH":
      return { ...state, isAuth: action.isAuth }
    case "SET-CAPTCHA":
      return { ...state, captcha: action.url }
    case "UPDATE-PHOTOS":
      return { ...state, authUserData: { ...state.authUserData, photos: action.photos } }
    case "SET-NEW-MESSAGES-COUNT":
      return {
        ...state,
        authUserData: { ...state.authUserData, newMessagesCount: action.count },
      }
    default:
      return state
  }
}

//type
type ActionsTypes =
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof setIsAuthAC>
  | ReturnType<typeof setCaptchaAC>
  | ReturnType<typeof updatePhotosAC>
  | ReturnType<typeof setNewMessagesCountAC>

//action
export const setAuthUserDataAC = (authUser: AuthMeDataType) => ({ type: "SET-AUTH-USER-DATA", authUser }) as const
export const setIsAuthAC = (isAuth: boolean) => ({ type: "SET-IS-AUTH", isAuth }) as const
export const setCaptchaAC = (url: string) => ({ type: "SET-CAPTCHA", url }) as const
export const setNewMessagesCountAC = (count: number) => ({ type: "SET-NEW-MESSAGES-COUNT", count }) as const
