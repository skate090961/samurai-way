import { Dispatch } from "redux"
import { setAppErrorAC, setAppStatusAC } from "../../store/app/app-reducer"

export const handleServerAppError = (data: { messages: string[] }, dispatch: Dispatch) => {
  if (data.messages.length) {
    dispatch(setAppErrorAC(data.messages[0]))
  } else {
    dispatch(setAppErrorAC("Some error"))
  }
  dispatch(setAppStatusAC("failed"))
}
