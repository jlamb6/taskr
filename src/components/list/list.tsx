import * as React from "react"
import { useState, useEffect } from "react"
import Card from "../card/card"
import CardInterface from "../../common/cardInterface"
import { Icon, IconColor } from "../../common/icons"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import Add from "@material-ui/icons/Add"
import "./list.less"
import { connect } from "react-redux"

export interface ListProps {
    id: string,
    name: string,
    cards: string[]
}

export const List = ( props: ListProps ) => {

    const defaultCardOptions = {
        id: "11111",
        title: "Default Title",
        members: ["Jake Lamb"],
        activity: ["Created today"],
        dateCreated: new Date,
    }

    const createNewTask = (event) => {
        const target = event.currentTarget;
        const parentList = target.parentElement.parentElement;
        const template = parentList.querySelector(".list__task-template");
        template.classList.remove("hide");
        template.querySelector("textarea").focus();
        target.classList.add("hide");
    }

    const createCard = (title: string) => {
        const newCard = defaultCardOptions;
        return <Card id={newCard.id} title={title} dateCreated={newCard.dateCreated} members={["Jake Lamb"]} activity={["Created today"]} key={newCard.id}/>;
    }

    const addNewTask = (event) => {
        const target = event.target;
        const parentEle = target.parentElement.parentElement;
        const taskTitle = parentEle.querySelector("textarea").value;
        const list = parentEle.parentElement.parentElement;
        let newTask = defaultCardOptions;
        parentEle.classList.add("hide");
        parentEle.querySelector("textarea").value = "";
        list.querySelector(".list__new-task").classList.remove("hide");
        newTask.title = taskTitle;
        const { id, title, members, activity, dateCreated } = newTask;
        console.log(taskTitle);
        console.log(list);
    }

    const addNewTaskOnEnter = (event) => { 
        if (event.keyCode === 13) {
            const target = event.currentTarget;
            const parentEle = target.parentElement.parentElement;
            parentEle.classList.add("hide");
            console.log(target.value);
            target.value = "";
            parentEle.parentElement.parentElement.querySelector(".list__new-task").classList.remove("hide");
        }
    }

    const cancelNewTask = (event) => {
        const target = event.target;
        const parentEle = target.parentElement.parentElement;
        parentEle.classList.add("hide");
        parentEle.querySelector("textarea").value = "";
        parentEle.parentElement.parentElement.querySelector(".list__new-task").classList.remove("hide");
    }

    return (
        <div className="list">
            <div className="list__header">
                <div>{props.name}</div>
            </div>
            <div className="list__body">
                {props.cards.map(cur => 
                    <Card id={cur} key={cur} />
                )}
                <div className="list__task-template hide">
                    <div className="list__task-desc">
                        <textarea onKeyDown={addNewTaskOnEnter}></textarea>
                    </div>
                    <div className="list__task-actions">
                        <Button title="Add Task" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#5aac44" fontColor="white" onClick={addNewTask}/>
                        <Button title="Cancel" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#fd612c" fontColor="white" onClick={cancelNewTask} />
                    </div>
                </div>
            </div>
            <div className='list__footer'>
                <div className="list__new-task" onClick={createNewTask}>
                    <Add height="12px" width="12px" fill="#696969" />
                    <span>Add new task</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { task: state.task }
}

export default connect(mapStateToProps)(List)
