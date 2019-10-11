import * as React from "react"
import { useState, useEffect } from "react"
import Card from "../card/card"
import CardInterface from "../../common/cardInterface"
import { Icon, IconColor } from "../../common/icons"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import Add from "@material-ui/icons/Add"
import "./list.less"
import AddButton from "../../common/addButton"
import { Droppable } from "react-beautiful-dnd"

export interface ListProps {
    id: string,
    name: string,
    tasks: CardInterface[]
}

export const List = ( props: ListProps ) => {

    return (
        <Droppable droppableId={props.id}>
            {(provided, ) => (
                <div className="list" {...provided.droppableProps} ref={provided.innerRef} >
                    <div className="list__container">
                        <div className="list__header">
                            <div>{props.name}</div>
                        </div>
                        <div className="list__body">
                            {props.tasks.map((cur, index) => 
                                <Card task={cur} key={cur.id} index={index} />
                            )}
                        </div>
                        {provided.placeholder}
                        <div className='list__footer'>
                            <AddButton list={props.id} text={(props.tasks.length > 1) ? "Add another task" : "Add a task"} />
                        </div>
                    </div>
                </div>
            )}
        </Droppable>
    )
}

export default List