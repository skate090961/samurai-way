import {authAPI, AuthMeDataType} from "../../../api/auth-api";
import {AppDispatch} from "../../store";
import {PhotosType} from "../../../api/users-api";
import {profileAPI} from "../../../api/profile-api";
import {setUserProfileAC, toggleProfileLoadingAC} from "../profile-reducer/profile-reducer";

const initialState: AuthType = {
    authUserData: {
        id: null,
        email: null,
        login: null,
        photos: null
    },
    isAuth: false
}

export const authReducer = (state = initialState, action: ReturnType<typeof setAuthUserDataAC>) => {

    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, authUserData: {...action.authUser, photos: action.photos}, isAuth: true}
        default:
            return state
    }
}

//type
export type AuthMeDataExtendsType = AuthMeDataType & { photos: PhotosType | null }

type AuthType = {
    authUserData: AuthMeDataExtendsType
    isAuth: boolean
}

//action
const setAuthUserDataAC = (authUser: AuthMeDataType, photos: PhotosType | null) =>
    ({type: 'SET-AUTH-USER-DATA', authUser, photos} as const)

//thunk
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