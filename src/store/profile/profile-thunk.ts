import { Dispatch } from "redux"
import { ContactsType, ModelProfileType, profileAPI } from "../../api/profile-api"
import { setStatusAC, setUserProfileAC, toggleProfileLoadingAC, updatePhotosAC } from "./profile-reducer"
import { handleServerNetworkError } from "../../utils/handle-errors/handleServerNetworkError"
import { AxiosError } from "axios"
import { setAppStatusAC } from "../app/app-reducer"
import { handleServerAppError } from "../../utils/handle-errors/handleServerAppError"
import { AppDispatch } from "../store"
import { RootStateType } from "../rootReducer"

export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(toggleProfileLoadingAC(true))
  try {
    if (userId) {
      const profile = await profileAPI.getUserProfile(userId)
      dispatch(setUserProfileAC(profile))
    }
  } catch (e) {
    handleServerNetworkError(e as AxiosError, dispatch)
  } finally {
    dispatch(toggleProfileLoadingAC(false))
  }
}

export const getProfileStatusTC = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"))
  try {
    const status = await profileAPI.getProfileStatus(userId)
    dispatch(setStatusAC(status))
    dispatch(setAppStatusAC("succeeded"))
  } catch (e) {
    handleServerNetworkError(e as AxiosError, dispatch)
  }
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"))
  try {
    const newStatus = await profileAPI.updateProfileStatus(status)
    if (newStatus.resultCode === 0) {
      dispatch(setStatusAC(status))
      dispatch(setAppStatusAC("succeeded"))
    } else {
      handleServerAppError(newStatus, dispatch)
    }
  } catch (e) {
    handleServerNetworkError(e as AxiosError, dispatch)
  }
}

export const updateProfilePhotoTC = (file: File) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"))
  try {
    const response = await profileAPI.updateProfilePhotos(file)
    if (response.resultCode === 0) {
      dispatch(updatePhotosAC(response.data.photos))
      dispatch(setAppStatusAC("succeeded"))
    } else {
      handleServerAppError(response, dispatch)
    }
  } catch (e) {
    handleServerNetworkError(e as AxiosError, dispatch)
  }
}

type ProfileDataType = {
  aboutMe?: string
  lookingForAJob?: boolean
  lookingForAJobDescription?: string
  fullName?: string
  contacts?: ContactsType
}

export const updateSettingsTC =
  (updateModel: ProfileDataType) => async (dispatch: AppDispatch, getState: () => RootStateType) => {
    dispatch(setAppStatusAC("loading"))
    const { id } = getState().auth.authUserData
    if (!id) return console.warn("auth id not found in the state")
    const { aboutMe, fullName, lookingForAJobDescription, lookingForAJob, contacts } =
      await profileAPI.getUserProfile(id)
    const model: ModelProfileType = {
      aboutMe,
      fullName,
      lookingForAJobDescription,
      lookingForAJob,
      contacts,
      ...updateModel,
    }
    try {
      const response = await profileAPI.updateProfileSettings(model)
      if (response.resultCode === 0) {
        dispatch(setAppStatusAC("succeeded"))
      } else {
        handleServerAppError(response, dispatch)
      }
    } catch (e) {
      handleServerNetworkError(e as AxiosError, dispatch)
    }
  }
