import React, { Component} from "react";
//import {hot} from "react-hot-loader";
import "./App.less";
import SideMenu from "../src/components/menu/menu-side"
import BoardHeader from "./components/menu/board-header"
import List from "../src/components/list/list"
import CardInterface from "../src/common/cardInterface"
import { ListSubheader } from "@material-ui/core";
import { connect } from "react-redux"

const App = (props) => {
    const desc = "This board is for project management relating to software development";
    const title = "Web Development";
    const lastActivity = "Mon Aug 28, 2019";

    return(
      <div className="App">
        <SideMenu />
        <BoardHeader boardName={props.board.name} boardDescription={props.board.desc} lastActivity={lastActivity} />
        <div className="board-ui dragscroll">
          {props.lists.lists.map(list => (
            <List name={list.name} id={list.id} tasks={list.tasks} key={list.id} />
          ))}
        </div>  
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return { lists: state.lists, board: state.board }
}

export default connect(
  mapStateToProps
)(App)