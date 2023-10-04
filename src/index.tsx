import React from 'react';
import './assets/styles/globals.css'
import './assets/styles/reset.css'
import store from "./state/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscriber(rerenderEntireTree)