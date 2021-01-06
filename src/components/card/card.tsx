import * as React from "react"
import { useState, useEffect, useRef } from "react"
import CardInterface from "../../common/cardInterface"
import "./card.less"
import { Draggable } from "react-beautiful-dnd"
import { Icon, IconColor } from "../../common/icons"
import CardEdit from "./card-edit";
import { connect } from "react-redux"
import { applyOverlay } from "../../actions/actions"
import FixedContainer from "../../common/fixedContainer"

export const Card = (props) => {
    const [title, setTitle] = useState(props.task.title)
    const [isEditOpen, setEditOpen] = useState(false)
    const [coordinates, setCoordinates] = useState({left: 0, top: 0, width: 0})
    const cardEle = useRef(null)

    const changeTitle = (newTitle) => {
        setTitle(newTitle);
        setEditOpen(false);
    }

    const toggleEdit = () => {
        if (isEditOpen) setEditOpen(false);
        else {
            setEditOpen(true);
        }
    }

    const openCardView = (event) => {
        props.dispatch(applyOverlay(event.currentTarget.parentElement, "cardView", props.task.id, props.list, false));
    }

    const closeOverlayOnBlur = (event) => {
        if (event.target === event.currentTarget) toggleEdit();
    }

    const closeOverlay = () => {
        toggleEdit();
    }

    useEffect(() => {
        setCoordinates(cardEle.current.getBoundingClientRect());
    }, [])

    if (!isEditOpen) {
        return(
            <Draggable draggableId={props.task.id} index={props.index}>
                {(provided) => (
                    <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="card__container" onClick={openCardView} ref={cardEle}>
                            <div className="card__title">
                                <div>{title}</div>
                                <CardEdit cardId={props.task.id} listId={props.list} action={toggleEdit}/>
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
    else {
        return (
            <>
                <div className="cardPlaceholder">

                </div>
                <div className="overlay" onClick={closeOverlayOnBlur} >
                    <div className="close-circle" onClick={closeOverlay} >
                        {Icon({name: "Close", color: IconColor.WHITE, medium: true})}
                    </div>
                    <FixedContainer 
                        action={changeTitle}
                        coordinates={coordinates} 
                        title={title} 
                        cardId={props.task.id} 
                        listId={props.list} />
                </div>
            </>
        )
    }
}

export default connect()(Card)