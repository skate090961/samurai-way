import { AuthMeDataType } from "../../api/auth-api"
import { PhotosType } from "../../api/users-api"
import { updatePhotosAC } from "../profile/profile-reducer"

const initialState: AuthType = {
  authUserData: {
    id: null,
    email: null,
    login: null,
    photos: null,
  },
  isAuth: false,
  captcha: "",
}

export const authReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "SET-AUTH-USER-DATA":
      return { ...state, authUserData: { ...action.authUser, photos: action.photos }, isAuth: true }
    case "SET-IS-AUTH":
      return { ...state, isAuth: action.isAuth }
    case "SET-CAPTCHA":
      return { ...state, captcha: action.url }
    case "UPDATE-PHOTOS":
      return { ...state, authUserData: { ...state.authUserData, photos: action.photos } }
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

export type AuthMeDataExtendsType = AuthMeDataType & { photos: PhotosType | null }
type AuthType = {
  authUserData: AuthMeDataExtendsType
  isAuth: boolean
  captcha: string
}

//action
export const setAuthUserDataAC = (authUser: AuthMeDataType, photos: PhotosType | null) =>
  ({ type: "SET-AUTH-USER-DATA", authUser, photos }) as const
export const setIsAuthAC = (isAuth: boolean) => ({ type: "SET-IS-AUTH", isAuth }) as const
export const setCaptchaAC = (url: string) => ({ type: "SET-CAPTCHA", url }) as const
