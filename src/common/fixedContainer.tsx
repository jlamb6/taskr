import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import { editTaskTitle, applyOverlay } from "../actions/actions";
import AnchorButton from "../common/anchorButton"

const FixedContainer = (props) => {

    const [ title, setTitle ] = useState(props.title);

    const saveTitle = (event) => {
        props.action(title);
        props.dispatch(editTaskTitle(props.cardId, props.listId, title));
        props.dispatch(applyOverlay(null, null, null, null, true));
    }
    
    const coordinates = props.coordinates; 
    const x = coordinates.left; 
    const y = coordinates.top;
    const width = coordinates.width;
    const textarea = useRef(null);

    const styles = {
        top: `${y}px`,
        left: `${x}px`,
        width: `${width}px`,
        height: "76px",
        borderRadius: "4px",
        zIndex: 1000
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
            setTitle(event.currentTarget.value);
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
                <AnchorButton 
                    classes="card__quick-edit__action" 
                    childClasses="card__quick-fix__action-title" 
                    icon="Edit"
                    title="Edit Labels"
                    hasIcon={true}
                />
                <AnchorButton 
                    classes="card__quick-edit__action" 
                    childClasses="card__quick-fix__action-title" 
                    icon="PersonAdd"
                    title="Assign Member"
                    hasIcon={true}
                />
                <AnchorButton 
                    classes="card__quick-edit__action" 
                    childClasses="card__quick-fix__action-title" 
                    icon="FileCopy"
                    title="Copy"
                    hasIcon={true}
                />
                <AnchorButton 
                    classes="card__quick-edit__action" 
                    childClasses="card__quick-fix__action-title" 
                    icon="ArrowForward"
                    title="Move"
                    hasIcon={true}
                />
            </div>
        </div>
    )
}

export default connect()(FixedContainer)