import React from 'react';
import ReactDOM from "react-dom";

import { store } from './app/store';

import App from "./app/App";

const render = () => {
    ReactDOM.render(
        <App 
            state = {store.getState()} 
            dispatch = {store.dispatch}
        />,
        document.getElementById('root')
    )
}

render();

store.subscribe(render)