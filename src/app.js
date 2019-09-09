import React, { Component} from "react";
//import {hot} from "react-hot-loader";
import "./App.less";
import SideMenu from "../src/components/menu/menu-side"
import BoardHeader from "./components/menu/board-header"
import List from "../src/components/list/list"
import CardInterface from "../src/common/cardInterface"

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
          <List id="12332111" name="List One" cards={cardsGroupOne} />
          <List id="345543" name="List Two" cards={cardsGroupTwo} />
          <List id="98798789" name="List Three" cards={cardsGroupThree} />
        </div>  
      </div>
    )
  }
}

//export default hot(module)(App);
export default App