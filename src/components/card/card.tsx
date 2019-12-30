import * as React from "react"
import { useState, useRef } from "react"
import CardInterface from "../../common/cardInterface"
import "./card.less"
import { Draggable } from "react-beautiful-dnd"
import { Icon, IconColor } from "../../common/icons"
import CardEdit from "./card-edit";
import { connect } from "react-redux"
import { applyOverlay } from "../../actions/actions"

export const Card = (props) => {

    const openCardView = (event) => {
        props.dispatch(applyOverlay(event.currentTarget.parentElement, "cardView", props.task.id, props.list, false));
    }

    return(
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided) => (
                <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="card__container" onClick={openCardView}>
                        <div className="card__title">
                            <div>{props.task.title}</div>
                            <CardEdit cardId={props.task.id} listId={props.list} />
                        </div>
                        <div className="card__body">
                            <div className="card__icons">

                            </div>
                            <div className="card__members">

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default connect()(Card)