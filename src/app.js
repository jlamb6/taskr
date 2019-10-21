import React, { Component} from "react";
//import {hot} from "react-hot-loader";
import "./App.less";
import SideMenu from "../src/components/menu/menu-side"
import BoardHeader from "./components/menu/board-header"
import List from "../src/components/list/list"
import CardInterface from "../src/common/cardInterface"
import { ListSubheader } from "@material-ui/core";
import { connect } from "react-redux"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { sort, sortList } from "./actions/actions"

const classNames = require("classnames")

const App = (props) => {
    const desc = "This board is for project management relating to software development";
    const title = "Web Development";
    const lastActivity = "Mon Aug 28, 2019";

    const onDragEnd = (result) => {
      const { destination, source, draggableId, type } = result;

      if (!destination) return;

      if (type === "task") {
        props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId));
      }
      else if (type === "column") {
        props.dispatch(sortList(source.index, destination.index, draggableId));
      }
    }

    const classes = classNames("App", {collapse: !props.board.isMenuOpen});

    return(
      <div className={classes}>
        <SideMenu open={props.board.isMenuOpen} />
        <BoardHeader boardName={props.board.name} boardDescription={props.board.desc} lastActivity={lastActivity} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="columns" direction="horizontal" type="column">
            {(provided) => (
              <div className="board-ui" {...provided.droppableProps} ref={provided.innerRef}>
                  {props.lists.lists.map((list, index) => (
                    <List name={list.name} id={list.id} tasks={list.tasks} key={list.id} index={index} />
                  ))}
                  {provided.placeholder}
              </div>  
            )}
          </Droppable>
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