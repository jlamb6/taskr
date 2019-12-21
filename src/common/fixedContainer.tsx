import * as React from "react"
import { useState, useEffect, useRef } from "react"
import Textarea from 'react-textarea-autosize';

const FixedContainer = (props) => {

    const [ title, setTitle ] = useState(props.element.innerText);
    
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

    useEffect(() => {
        textarea.current.focus();
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
                ></textarea>
            </div>
            <button className="card__quick-edit__save btn green">Save</button>
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

export default FixedContainer