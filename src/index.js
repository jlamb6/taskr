import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux"
import { createStore } from "redux"
import taskApp from "./reducers/reducers" 
import { BrowserRouter, Route, Link } from "react-router-dom"

const store = createStore(taskApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store} >
        <App /> 
    </Provider>
, document.getElementById("root"));
