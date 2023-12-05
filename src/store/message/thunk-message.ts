import {dialogsAPI} from "../../api/dialogs-api";
import {Dispatch} from "redux";
import {handleServerNetworkError} from "../../utils/handle-errors/handleServerNetworkError";
import {AxiosError} from "axios";
import {setAppStatusAC} from "../app/app-reducer";
import {setDialogsAC, setMessagesAC} from "./message-reducer";
import {handleServerAppError} from "../../utils/handle-errors/handleServerAppError";

export const getDialogsTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const response = await dialogsAPI.getDialogs()
        dispatch(setDialogsAC(response))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}

export const getMessagesTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const response = await dialogsAPI.getMessages(userId)
        if (!response.error) {
            dispatch(setMessagesAC(response.items))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(response.error, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}