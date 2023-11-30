import {RootStateType} from "../rootReducer";

export const selectDialogs = (state: RootStateType) => state.chatPage.dialogs
export const selectMessages = (state: RootStateType) => state.chatPage.messages
export const selectNewMessageText = (state: RootStateType) => state.chatPage.newMessageText