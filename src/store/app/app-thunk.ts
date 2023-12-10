import { authAPI } from "../../api/auth-api"
import { setAuthUserDataAC, setIsAuthAC } from "../auth/auth-reducer"
import { setAppInitializedAC } from "./app-reducer"
import { AppDispatch } from "../store"
import { handleServerNetworkError } from "../../utils/handle-errors/handleServerNetworkError"
import { AxiosError } from "axios"
import { profileAPI } from "../../api/profile-api"
import { setUserProfileAC } from "../profile/profile-reducer"

export const setAppInitializedTC = () => async (dispatch: AppDispatch) => {
  try {
    const res = await authAPI.me()
    if (res.resultCode === 0) {
      const userProfile = await profileAPI.getUserProfile(Number(res.data.id))
      dispatch(setAuthUserDataAC(res.data, userProfile.photos))
      dispatch(setUserProfileAC(userProfile))
      dispatch(setIsAuthAC(true))
    } else {
      dispatch(setIsAuthAC(false))
    }
  } catch (e) {
    handleServerNetworkError(e as AxiosError, dispatch)
  } finally {
    dispatch(setAppInitializedAC(true))
  }
}
