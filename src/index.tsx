import React from "react"
import "./assets/styles/globals.css"
import "./assets/styles/reset.css"
import store from "./store/store"
import ReactDOM from "react-dom"
import App from "./app/App"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root"),
)
