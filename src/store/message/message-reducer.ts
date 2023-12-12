import { DialogType, MessageType } from "../../api/dialogs-api"

type MessageStateType = {
  items: MessageType[]
  currentPage: number
  pageSize: number
  totalItemsCount: number
}

export type ChatPageType = {
  dialogs: DialogType[]
  messages: MessageStateType
  newMessageText: string
}
type ActionsTypes =
  | ReturnType<typeof updateMessagesAC>
  | ReturnType<typeof setDialogsAC>
  | ReturnType<typeof setMessagesAC>
  | ReturnType<typeof removeMessageAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalItemsCountAC>
  | ReturnType<typeof removeMessagesAC>

const initialState: ChatPageType = {
  dialogs: [],
  messages: {
    items: [],
    currentPage: 1,
    pageSize: 8,
    totalItemsCount: 0,
  },
  newMessageText: "",
}

export const messageReducer = (state: ChatPageType = initialState, action: ActionsTypes): ChatPageType => {
  switch (action.type) {
    case "MESSAGE/UPDATE-MESSAGES": {
      return {
        ...state,
        messages: { ...state.messages, items: [...state.messages.items, action.message] },
      }
    }
    case "MESSAGE/SET-DIALOGS":
      return {
        ...state,
        dialogs: action.dialogs,
      }
    case "MESSAGE/SET-MESSAGES":
      return {
        ...state,
        messages: { ...state.messages, items: [...action.messages, ...state.messages.items] },
      }
    case "MESSAGE/REMOVE-MESSAGE":
      return {
        ...state,
        messages: {
          ...state.messages,
          items: state.messages.items.filter((message) => message.id !== action.messageId),
        },
      }
    case "MESSAGE/REMOVE-MESSAGES":
      return {
        ...state,
        messages: { ...state.messages, items: [] },
      }
    case "MESSAGE/SET-CURRENT-PAGE":
      return {
        ...state,
        messages: { ...state.messages, currentPage: action.currentPage },
      }
    case "MESSAGE/SET-TOTAL-ITEMS-COUNT":
      return {
        ...state,
        messages: { ...state.messages, totalItemsCount: action.totalCount },
      }
    default:
      return state
  }
}

export const setDialogsAC = (dialogs: DialogType[]) => ({ type: "MESSAGE/SET-DIALOGS", dialogs }) as const
export const setMessagesAC = (messages: MessageType[]) => ({ type: "MESSAGE/SET-MESSAGES", messages }) as const
export const updateMessagesAC = (message: MessageType) => ({ type: "MESSAGE/UPDATE-MESSAGES", message }) as const
export const removeMessageAC = (messageId: string) => ({ type: "MESSAGE/REMOVE-MESSAGE", messageId }) as const
export const removeMessagesAC = () => ({ type: "MESSAGE/REMOVE-MESSAGES" }) as const
export const setCurrentPageAC = (currentPage: number) => ({ type: "MESSAGE/SET-CURRENT-PAGE", currentPage }) as const
export const setTotalItemsCountAC = (totalCount: number) =>
  ({ type: "MESSAGE/SET-TOTAL-ITEMS-COUNT", totalCount }) as const
