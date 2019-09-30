import * as React from "react"
import CardInterface from "../../common/cardInterface"
import "./card.less"
import { Draggable } from "react-beautiful-dnd"

export const Card = (props) => {

    return(
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided) => (
                <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="card__title">
                        <div>{props.task.title}</div>
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