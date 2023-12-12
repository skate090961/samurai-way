import { authAPI } from "../../api/auth-api"
import { setAuthUserDataAC, setIsAuthAC, setNewMessagesCountAC } from "../auth/auth-reducer"
import { setAppInitializedAC } from "./app-reducer"
import { AppDispatch } from "../store"
import { handleServerNetworkError } from "../../utils/handle-errors/handleServerNetworkError"
import { AxiosError } from "axios"
import { profileAPI } from "../../api/profile-api"
import { setUserProfileAC, updatePhotosAC } from "../profile/profile-reducer"
import { dialogsAPI } from "../../api/dialogs-api"

export const setAppInitializedTC = () => async (dispatch: AppDispatch) => {
  try {
    const res = await authAPI.me()
    if (res.resultCode === 0) {
      const userProfile = await profileAPI.getUserProfile(Number(res.data.id))
      dispatch(setAuthUserDataAC(res.data))
      dispatch(updatePhotosAC(userProfile.photos))
      dispatch(setUserProfileAC(userProfile))
      const newMessagesCount = await dialogsAPI.getNewMessagesCount()
      dispatch(setNewMessagesCountAC(newMessagesCount))
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
