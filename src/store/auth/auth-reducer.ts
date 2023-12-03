import {AuthMeDataType} from "../../api/auth-api";
import {PhotosType} from "../../api/users-api";

const initialState: AuthType = {
    authUserData: {
        id: null,
        email: null,
        login: null,
        photos: null
    },
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, authUserData: {...action.authUser, photos: action.photos}, isAuth: true}
        case "SET-IS-AUTH":
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}

//type
type ActionsTypes = ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setIsAuthAC>

export type AuthMeDataExtendsType = AuthMeDataType & { photos: PhotosType | null }
type AuthType = {
    authUserData: AuthMeDataExtendsType
    isAuth: boolean
}

//action
export const setAuthUserDataAC = (authUser: AuthMeDataType, photos: PhotosType | null) =>
    ({type: 'SET-AUTH-USER-DATA', authUser, photos} as const)
export const setIsAuthAC = (isAuth: boolean) =>
    ({type: 'SET-IS-AUTH', isAuth} as const)
