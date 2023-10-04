import React from 'react';
import './assets/styles/globals.css'
import './assets/styles/reset.css'
import store from "./store/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})