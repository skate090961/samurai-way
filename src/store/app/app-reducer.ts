export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

const initialState = {
  status: "idle" as RequestStatusType,
  error: null as string | null,
  isInitialized: false,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case "APP/SET-STATUS":
      return {
        ...state,
        status: action.status,
      }
    case "APP/SET-ERROR":
      return {
        ...state,
        error: action.error,
      }
    case "APP/SET-INITIALIZED":
      return {
        ...state,
        isInitialized: action.value,
      }
    default:
      return state
  }
}

type ActionsType =
  | ReturnType<typeof setAppStatusAC>
  | ReturnType<typeof setAppErrorAC>
  | ReturnType<typeof setAppInitializedAC>

export const setAppStatusAC = (status: RequestStatusType) => ({ type: "APP/SET-STATUS", status }) as const
export const setAppErrorAC = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const
export const setAppInitializedAC = (value: boolean) => ({ type: "APP/SET-INITIALIZED", value }) as const
