import {Dispatch} from "redux";
import {profileAPI} from "../../api/profile-api";
import {setUserProfileAC, toggleProfileLoadingAC} from "./profile-reducer";

export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleProfileLoadingAC(true))
    try {
        if (userId) {
            const profile = await profileAPI.getUserProfile(userId)
            dispatch(setUserProfileAC(profile))
        }
    } finally {
        dispatch(toggleProfileLoadingAC(false))
    }
}