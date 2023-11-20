import {AnyAction, applyMiddleware, legacy_createStore as createStore} from "redux"
import rootReducer, {RootStateType} from "./reducers/rootReducer"
import thunk, {ThunkDispatch} from "redux-thunk"
import {useDispatch} from "react-redux"

type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

export default store
