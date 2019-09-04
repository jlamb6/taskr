import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.less";
import SideMenu from "../src/components/menu/menu-side"
import BoardHeader from "./components/menu/board-header"
import List from "../src/components/list/list"
import CardInterface from "../src/common/cardInterface"

const newcard = (id, title, dc, members, activity) => {
  let obj = {
    id: id,
    title: title,
    dateCreated: dc,
    members: members,
    activity: activity
  }
  return obj;
}

const cardOne = newcard("123321", "Task 1", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardTwo = newcard("1233345", "Task 2", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardThree = newcard("123456", "Task 3", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardFour = newcard("123778", "Task 4", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardFive = newcard("123789", "Task 5", new Date, ["Jacob Lamb"], ["Created Today"]);
const cardSix = newcard("123987", "Task 6", new Date, ["Jacob Lamb"], ["Created Today"]);

const cardsGroupOne = [cardOne, cardTwo];
const cardsGroupTwo = [cardOne, cardTwo, cardThree, cardFour, cardFive];
const cardsGroupThree = [cardOne, cardFive, cardSix];

class App extends Component{
  render(){
    const desc = "This board is for project management relating to software development";
    const title = "Web Development";
    const lastActivity = "Mon Aug 28, 2019";
    return(
      <div className="App">
        <SideMenu />
        <BoardHeader boardName={title} boardDescription={desc} lastActivity={lastActivity} />
        <div className="board-ui">
          <List name="List One" cards={cardsGroupOne} />
          <List name="List Two" cards={cardsGroupTwo} />
          <List name="List Three" cards={cardsGroupThree} />
        </div>  
      </div>
    );
  }
}

export default hot(module)(App);