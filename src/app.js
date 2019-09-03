import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.less";
import SideMenu from "../src/components/menu/menu-side"
import BoardHeader from "./components/menu/board-header"

class App extends Component{
  render(){
    return(
      <div className="App">
        <SideMenu />
        <BoardHeader />
      </div>
    );
  }
}

export default hot(module)(App);