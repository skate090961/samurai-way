import {legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer)

// @ts-ignore
window.store = store

export default store
