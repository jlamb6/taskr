import React, { Component} from "react";
//import {hot} from "react-hot-loader";
import "./App.less";
import SideMenu from "../src/components/menu/menu-side"
import BoardHeader from "./components/menu/board-header"
import List from "../src/components/list/list"
import CardInterface from "../src/common/cardInterface"
import { ListSubheader } from "@material-ui/core";
import { connect } from "react-redux"

const newcard = (id, lid, title, dc, members, activity) => {
  let obj = {
    id: id,
    listId: lid,
    title: title,
    dateCreated: dc,
    members: members,
    activity: activity
  }
  return obj;
}

const cardOne = newcard("123321", "4312", "Task 1", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardTwo = newcard("1233345", "43123", "Task 2", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardThree = newcard("123456", "43124", "Task 3", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardFour = newcard("123778", "43125", "Task 4", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardFive = newcard("123789", "43126", "Task 5", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardSix = newcard("123987", "43127", "Task 6", new Date, ["Jacob Lamb"], ["Created Today"]);

const cardsGroupOne = [cardOne, cardTwo];
const cardsGroupTwo = [cardOne, cardTwo, cardThree, cardFour, cardFive];
const cardsGroupThree = [cardOne, cardFive, cardSix];

const App = (props) => {
    const desc = "This board is for project management relating to software development";
    const title = "Web Development";
    const lastActivity = "Mon Aug 28, 2019";

    return(
      <div className="App">
        <SideMenu />
        <BoardHeader boardName={props.board.name} boardDescription={props.board.desc} lastActivity={lastActivity} />
        <div className="board-ui dragscroll">
          {props.lists.map(list => (
            <List name={list.name} id={list.id} cards={list.tasks} key={list.id} />
          ))}
        </div>  
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.board);
  return { lists: state.board.lists, board: state.board.board }
}

export default connect(
  mapStateToProps
)(App)