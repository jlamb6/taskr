import * as React from "react"
import { useState, useRef } from "react"
import CardInterface from "../../common/cardInterface"
import "./card.less"
import { Draggable } from "react-beautiful-dnd"
import { Icon, IconColor } from "../../common/icons"
import CardEdit from "./card-edit";

export const Card = (props) => {

    const [isEditOpen, setEditOpen] = useState(false);
    /*
    const cardParent = useRef(null);

    const toggleCardEdit = (event) => {
        let editBtn = event.currentTarget.querySelector(".card__edit");
        if (!isEditOpen) {
            editBtn.classList.remove("hidden");
            setEditOpen(true);
        }
        else {
            editBtn.classList.add("hidden");
            setEditOpen(false);
        }
    }   
    */
    return(
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided) => (
                <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="card__title">
                        <div>{props.task.title}</div>
                        <CardEdit />
                    </div>
                    <div className="card__body">
                        <div className="card__icons">

                        </div>
                        <div className="card__members">

                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Card