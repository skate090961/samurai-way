import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/globals.css'
import './assets/styles/reset.css'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state from "./state/state";

ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>,
  document.getElementById('root')
);