import { RootStateType } from "../rootReducer"

export const selectAppStatus = (state: RootStateType) => state.app.status
export const selectErrorMessage = (state: RootStateType) => state.app.error
export const selectIsInitialized = (state: RootStateType) => state.app.isInitialized
