import {AppDispatch} from "../store";
import {setUserProfileAC, toggleProfileLoadingAC} from "../profile/profile-reducer";
import {authAPI} from "../../api/auth-api";
import {profileAPI} from "../../api/profile-api";
import {setAuthUserDataAC} from "./auth-reducer";

export const getAuthUserDataTC = () => async (dispatch: AppDispatch) => {
    dispatch(toggleProfileLoadingAC(true))
    const authUser = await authAPI.getAuthMe()
    if (authUser.resultCode === 0) {
        const userProfile = await profileAPI.getUserProfile(Number(authUser.data.id))
        dispatch(setAuthUserDataAC(authUser.data, userProfile.photos))
        dispatch(setUserProfileAC(userProfile))
        dispatch(toggleProfileLoadingAC(false))
    }
}