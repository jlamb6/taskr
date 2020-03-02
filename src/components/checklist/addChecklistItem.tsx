import React, {useState, useEffect} from "react"
import Add from "@material-ui/icons/Add"
import Textarea from 'react-textarea-autosize';
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import { connect } from "react-redux"

export const AddChecklistButton = (props) => {

    const [formIsOpen, setFormIsOpen] = useState(false);
    const [text, setText] = useState("");
    const list = props.list;
    const placeholderText = "Enter a title for the checklist item...";

    const handleKeystroke = (event) => {
        if (event.keyCode === 13) {
          handleAddTask();
        }
    }

    const handleOnChange = (event) => {
        setText(event.currentTarget.value);
    }

    const handleBlur = (event) => {
        setText("");
        setFormIsOpen(false);
    }

    const renderAddButton = () => {
        
        return (
            <div className="list__new-task" onClick={() => setFormIsOpen(true)}>
                <Add height="12px" width="12px" fill="#696969" />
                <span>{props.text}</span>
            </div>
        )
    }

    const renderForm = () => {

        return (
            <div className="list__task-template">
                <div className="list__task-desc">
                    <Textarea 
                        placeholder={placeholderText} 
                        onChange={(e) => handleOnChange(e)}
                        onKeyDown={(e) => handleKeystroke(e)}
                        onBlur={handleBlur}
                        value={text}
                        autoFocus
                        style={{
                            resize: "none",
                            overflow: "hidden"
                        }}
                    >
                    </Textarea>
                </div>
                <div className="list__task-actions">
                    <Button title="Add Task" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#5aac44" fontColor="white" onMouseDown={handleAddTask}/>
                    <Button title="Cancel" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#fd612c" fontColor="white" />
                </div>
            </div>
        )
    }

    const handleAddTask = () => {
        const { dispatch } = props;
        const title = text;
        setText("");
        setFormIsOpen(false);

        if (text) {
            props.addItem(title);
        }

        return 
    }

    return formIsOpen ? renderForm() : renderAddButton();
}

export default connect()(AddChecklistButton)