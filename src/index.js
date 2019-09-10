import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux"
import { createStore } from "redux"
import taskApp from "./reducers/reducers" 
import { BrowserRouter, Route, Link } from "react-router-dom"

const initialState = {
    lists: [
        {
            title: "In Progress",
            id: "123",
            boardPosition: "1",
            tasks: [
                "123", "234", "345"
            ]
        }
    ],
    tasks: [
        {
            id: "123",
            title: "Go to store"
        },
        {
            id: "234",
            title: "Buy Milk"
        },
        {
            id: "345",
            title: "Pick up drugs"
        }
    ]
}

const store = createStore(taskApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store} >
        <App /> 
    </Provider>
, document.getElementById("root"));
