import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Hello from "./components/hello/hello.tsx"
import { BrowserRouter, Route, Link } from "react-router-dom"

ReactDOM.render(<Hello compiler="Typescript" framework="React" />, document.getElementById("root"));