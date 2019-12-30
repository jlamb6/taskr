import * as React from "react"
import { useState, useEffect } from "react"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import { Icon, IconColor } from "../../common/icons"
import { connect } from "react-redux"

const ChecklistItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [isComplete, setComplete] = useState(props.complete);
    const updateProgress = props.update;

    const icon = (isComplete) ? "CheckCircle" : "RadioButtonUnchecked";
    const classes = (isComplete) ? "checklist__item item-complete" : "checklist__item";

    const handleChange = (event) => { setTitle(event.target.value); };
    const handleEnter = (event) => { setTitle(event.target.value); };
    const toggleComplete = () => { 
        if (isComplete) { 
            setComplete(false);
            updateProgress(0);
         }
         else {
            setComplete(true); 
            updateProgress(1);
         }
    };
    const changeText = (event) => { 
        if (isComplete) {
            event.target.style.fontStyle = "initial"; 
            event.target.style.textDecoration = "initial"; 
        }
    };

    return (
        <div className={classes}>
            <div onClick={toggleComplete} style={{paddingTop: "2px"}}>
                <Icon name={icon} medium={true} />
            </div>
            <textarea 
                className="checklist-item__title" 
                value={title} 
                onChange={handleChange} 
                onKeyPress={handleEnter} 
                onFocus={changeText}
            />
        </div>
    )
}

export default ChecklistItem