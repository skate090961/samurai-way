import { AnyAction, applyMiddleware, legacy_createStore as createStore } from "redux"
import rootReducer, { RootStateType } from "./rootReducer"
import thunk, { ThunkDispatch } from "redux-thunk"
import { useDispatch } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

export type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

// @ts-ignore
window.store = store
