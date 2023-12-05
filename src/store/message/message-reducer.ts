import {DialogType, MessageType} from "../../api/dialogs-api";

export type ChatPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
type ActionsTypes = ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof setDialogsAC>
    | ReturnType<typeof setMessagesAC>

const initialState: ChatPageType = {
    dialogs: [],
    messages: [],
    newMessageText: ''
}

export const messageReducer = (state: ChatPageType = initialState, action: ActionsTypes): ChatPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newText
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

export const updateNewMessageTextAC = (newText: string) => (
    {type: 'UPDATE-NEW-MESSAGE-TEXT', newText} as const
)
export const setDialogsAC = (dialogs: DialogType[]) => ({type: 'SET-DIALOGS', dialogs} as const)
export const setMessagesAC = (messages: MessageType[]) => ({type: 'SET-MESSAGES', messages} as const)