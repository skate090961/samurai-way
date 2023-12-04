import {AppDispatch} from "../store";
import {authAPI, LoginParamsType} from "../../api/auth-api";
import {setIsAuthAC} from "./auth-reducer";
import {handleServerAppError} from "../../utils/handle-errors/handleServerAppError";
import {handleServerNetworkError} from "../../utils/handle-errors/handleServerNetworkError";
import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {setAppInitializedAC, setAppStatusAC} from "../app/app-reducer";
import {setAppInitializedTC} from "../app/app-thunk";

export const loginTC = (login: LoginParamsType) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const response = await authAPI.login(login)
        if (response.resultCode === 0) {
            dispatch(setAppInitializedAC(false))
            dispatch(setAppInitializedTC())
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(response, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const response = await authAPI.logout()
        if (response.resultCode === 0) {
            dispatch(setIsAuthAC(false))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(response, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}