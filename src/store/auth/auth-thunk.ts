import {AppDispatch} from "../store";
import {setUserProfileAC, toggleProfileLoadingAC} from "../profile/profile-reducer";
import {authAPI} from "../../api/auth-api";
import {profileAPI} from "../../api/profile-api";
import {setAuthUserDataAC} from "./auth-reducer";
import {handleServerAppError} from "../../utils/handle-errors/handleServerAppError";
import {handleServerNetworkError} from "../../utils/handle-errors/handleServerNetworkError";
import {AxiosError} from "axios";

export const getAuthUserDataTC = () => async (dispatch: AppDispatch) => {
    dispatch(toggleProfileLoadingAC(true))
    try {
        const authUser = await authAPI.getAuthMe()
        if (authUser.resultCode === 0) {
            const userProfile = await profileAPI.getUserProfile(Number(authUser.data.id))
            dispatch(setAuthUserDataAC(authUser.data, userProfile.photos))
            dispatch(setUserProfileAC(userProfile))
            dispatch(toggleProfileLoadingAC(false))
        } else {
            handleServerAppError(authUser, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }

}