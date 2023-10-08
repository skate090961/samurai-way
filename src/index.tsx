import React from 'react';
import './assets/styles/globals.css'
import './assets/styles/reset.css'
import store from "./store/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);