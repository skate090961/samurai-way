import {authAPI} from "../../api/auth-api";
import {setIsAuthAC} from "../auth/auth-reducer";
import {setAppInitializedAC} from "./app-reducer";
import {getAuthUserDataTC} from "../auth/auth-thunk";
import {AppDispatch} from "../store";
import {handleServerNetworkError} from "../../utils/handle-errors/handleServerNetworkError";
import {AxiosError} from "axios";
import {handleServerAppError} from "../../utils/handle-errors/handleServerAppError";

export const setAppInitializedTC = () => async (dispatch: AppDispatch) => {
    try {
        const res = await authAPI.getAuthMe()
        if (res.resultCode === 0) {
            await dispatch(getAuthUserDataTC())
            dispatch(setIsAuthAC(true))
        } else {
            dispatch(setIsAuthAC(false))
            handleServerAppError(res, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    } finally {
        dispatch(setAppInitializedAC(true))
    }
}