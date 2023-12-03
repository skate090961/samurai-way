import {RootStateType} from "../rootReducer";

export const selectAuthUserData = (state: RootStateType) => state.auth.authUserData
export const selectIsAuth = (state: RootStateType) => state.auth.isAuth