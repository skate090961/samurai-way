import { Dispatch } from "redux"
import { setAppErrorAC, setAppStatusAC } from "../../store/app/app-reducer"

export const handleServerNetworkError = (e: { message: string }, dispatch: Dispatch) => {
  dispatch(setAppErrorAC(e.message ? e.message : "Some error"))
  dispatch(setAppStatusAC("failed"))
}
