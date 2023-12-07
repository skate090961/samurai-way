import {DialogType, MessageType} from "../../api/dialogs-api";

export type ChatPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
type ActionsTypes = ReturnType<typeof updateMessagesAC>
    | ReturnType<typeof setDialogsAC>
    | ReturnType<typeof setMessagesAC>

const initialState: ChatPageType = {
    dialogs: [],
    messages: [],
    newMessageText: ''
}

export const messageReducer = (state: ChatPageType = initialState, action: ActionsTypes): ChatPageType => {
    switch (action.type) {
        case 'UPDATE-MESSAGES': {
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        }
        case "SET-DIALOGS":
            return {
                ...state,
                dialogs: action.dialogs
            }
        case "SET-MESSAGES":
            return {
                ...state,
                messages: action.messages
            }
        default:
            return state
    }
}

export const setDialogsAC = (dialogs: DialogType[]) => ({type: 'SET-DIALOGS', dialogs} as const)
export const setMessagesAC = (messages: MessageType[]) => ({type: 'SET-MESSAGES', messages} as const)
export const updateMessagesAC = (message: MessageType) => ({type: 'UPDATE-MESSAGES', message} as const)