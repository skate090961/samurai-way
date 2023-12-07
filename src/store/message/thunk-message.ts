import {dialogsAPI, MessageType} from "../../api/dialogs-api";
import {Dispatch} from "redux";
import {handleServerNetworkError} from "../../utils/handle-errors/handleServerNetworkError";
import {AxiosError} from "axios";
import {setAppStatusAC} from "../app/app-reducer";
import {setDialogsAC, setMessagesAC, updateMessagesAC} from "./message-reducer";
import {handleServerAppError} from "../../utils/handle-errors/handleServerAppError";
import {AppDispatch} from "../store";
import {RootStateType} from "../rootReducer";

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

export const updateDialogsTC = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        if (id) {
            await dialogsAPI.updateDialogs(id)
            const response = await dialogsAPI.getDialogs()
            dispatch(setDialogsAC(response))
        }
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}

export const sendMessageTC = (senderId: number, message: string) => async (dispatch: AppDispatch, getState: () => RootStateType) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const response = await dialogsAPI.sendMessage(senderId, message)
        if (response.resultCode === 0) {
            const {id, body, translatedBody, addedAt, senderName, recipientId, viewed} = response.data.message
            const message: MessageType = {
                id,
                body,
                translatedBody,
                addedAt,
                senderId: response.data.message.senderId,
                senderName,
                recipientId,
                viewed,
            }
            dispatch(updateMessagesAC(message))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(response, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}