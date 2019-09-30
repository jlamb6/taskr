import React, { Component} from "react";
//import {hot} from "react-hot-loader";
import "./App.less";
import SideMenu from "../src/components/menu/menu-side"
import BoardHeader from "./components/menu/board-header"
import List from "../src/components/list/list"
import CardInterface from "../src/common/cardInterface"
import { ListSubheader } from "@material-ui/core";
import { connect } from "react-redux"
import { DragDropContext } from "react-beautiful-dnd"
import { sort } from "./actions/actions"

const App = (props) => {
    const desc = "This board is for project management relating to software development";
    const title = "Web Development";
    const lastActivity = "Mon Aug 28, 2019";

    const onDragEnd = (result) => {
      // tasks reordering logic
      // need to reorder to tasks in the list that was rearranged so that React doesn't change it back
      // needs to account for changing lists as well
      const { destination, source, draggableId } = result;

      if (!destination) return;

      props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId));

    }

    return(
      <div className="App">
        <SideMenu />
        <BoardHeader boardName={props.board.name} boardDescription={props.board.desc} lastActivity={lastActivity} />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="board-ui dragscroll">
              {props.lists.lists.map(list => (
                <List name={list.name} id={list.id} tasks={list.tasks} key={list.id} />
              ))}
          </div>  
        </DragDropContext>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return { lists: state.lists, board: state.board }
}

export default connect(
  mapStateToProps
)(App)