import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux"
import { createStore } from "redux"
import taskApp from "./reducers/reducers" 
import { BrowserRouter, Route, Link } from "react-router-dom"

/*
lists: [
        {
            title: "In Progress",
            id: "1212",
            tasks: [
                {
                    title: "Go to the store",
                    id: "8989898",
                    completed: false,
                    activity: [
                        "Created on Aug 29 2019"
                    ],
                    members: [
                        "Jake Lamb"
                    ]
                }
            ]
        }
    ]
*/

const initialState = {
    lists: [
        {
            title: "In Progress",
            id: "123",
            boardPosition: "1"
        }
    ],
    tasks: [
        {
            id: "123",
            listId: "11",
            title: "Go to store"
        },
        {
            id: "234",
            listId: "11",
            title: "Buy Milk"
        },
        {
            id: "345",
            listId: "11",
            title: "Pick up drugs"
        }
    ]
}

const store = createStore(taskApp, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store} >
        <App /> 
    </Provider>
, document.getElementById("root"));
