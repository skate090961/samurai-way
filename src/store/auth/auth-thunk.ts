import {AppDispatch} from "../store"
import {authAPI, LoginParamsType} from "../../api/auth-api"
import {setCaptchaAC, setIsAuthAC} from "./auth-reducer"
import {handleServerAppError} from "../../utils/handle-errors/handleServerAppError"
import {handleServerNetworkError} from "../../utils/handle-errors/handleServerNetworkError"
import {AxiosError} from "axios"
import {Dispatch} from "redux"
import {setAppInitializedAC, setAppStatusAC} from "../app/app-reducer"
import {setAppInitializedTC} from "../app/app-thunk"
import {securityAPI} from "../../api/security-api"

export const loginTC = (login: LoginParamsType, setError: Function) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const response = await authAPI.login(login)
            if (response.resultCode === 0) {
                dispatch(setAppInitializedAC(false))
                dispatch(setAppInitializedTC())
                dispatch(setCaptchaAC(''))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                if (response.resultCode === 10) {
                    await dispatch(getCaptchaTC())
                    if (response.fieldsErrors.length) {
                        setError('captcha', {message: response.messages[0]})
                    } else {
                        setError('root', {message: response.messages[0]})
                    }
                }
                dispatch(setAppStatusAC('failed'))
            }
        } catch (e) {
            handleServerNetworkError((e as AxiosError), dispatch)
        }
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

export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const captchaUrl = await securityAPI.getCaptcha()
        dispatch(setCaptchaAC(captchaUrl))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}