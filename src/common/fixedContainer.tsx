import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import { editTaskTitle, applyOverlay } from "../actions/actions";

const FixedContainer = (props) => {

    const [ title, setTitle ] = useState(props.element.innerText);

    const saveTitle = (event) => {
        const newTitle = title;
        props.dispatch(editTaskTitle(props.cardId, props.listId, title));
        props.dispatch(applyOverlay(null, null, null, true));
    }
    
    const coordinates = props.element.getBoundingClientRect();
    const x = coordinates.left; 
    const y = coordinates.top;
    const width = coordinates.width;
    const textarea = useRef(null);

    const styles = {
        top: `${y}px`,
        left: `${x}px`,
        width: `${width}px`,
        height: "76px",
        borderRadius: "4px"
    }

    const stylesTwo = {
        top: `${y}px`,
        left: `${x + width}px`,
        padding: "0 12px"
    }

    const handleTitleUpdate = (event) => {
        setTitle(event.currentTarget.value);
    }

    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            saveTitle(event);
        }
    }

    useEffect(() => {
        textarea.current.focus();
        textarea.current.selectionStart = textarea.current.value.length;
    }, [])

    return (
        <div className="fixed-container" style={styles} >
            <div className="card__quick-edit__container">
                <div className="card__quick-edit__labels"></div>
                <textarea 
                    ref={textarea} 
                    className="card__quick-edit__title-editor" 
                    value={title} 
                    onChange={handleTitleUpdate}
                    onKeyDown={handleEnter}
                ></textarea>
            </div>
            <button className="card__quick-edit__save btn green" onClick={saveTitle}>Save</button>
            <div className="card__quick-edit__actions" style={stylesTwo}>
                <a className="card__quick-edit__action">
                    <span className="icon icon-left"></span>
                    <span className="card__quick-fix__action-title">Edit Labels</span>
                </a>
                <a className="card__quick-edit__action">
                    <span className="icon icon-left"></span>
                    <span className="card__quick-fix__action-title">Assign Member</span>
                </a>
                <a className="card__quick-edit__action">
                    <span className="icon icon-left"></span>
                    <span className="card__quick-fix__action-title">Copy</span>
                </a>
                <a className="card__quick-edit__action">
                    <span className="icon icon-left"></span>
                    <span className="card__quick-fix__action-title">Move</span>
                </a>
            </div>
        </div>
    )
}

export default connect()(FixedContainer)