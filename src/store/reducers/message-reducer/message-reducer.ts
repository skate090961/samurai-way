import {ChatPageType} from "../../store";
import {getRefactorTime} from "../../../utils/date/getRefactorDateAndTime";


type ActionsTypes = ReturnType<typeof updateNewMessageTextCreator> | ReturnType<typeof addNewMessageCreator>

export const messageReducer = (state: ChatPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'SEND-NEW-MESSAGE':
            const newMessage = {
                id: String(new Date().getTime()),
                message: state.newMessageText,
                time: getRefactorTime()
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newText}
        default:
            return state
    }
}

export const updateNewMessageTextCreator = (newText: string) => (
    {type: 'UPDATE-NEW-MESSAGE-TEXT', newText} as const
)
export const addNewMessageCreator = () => ({type: 'SEND-NEW-MESSAGE'} as const)