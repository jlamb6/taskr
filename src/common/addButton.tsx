import React, {useState, useEffect} from "react"
import Add from "@material-ui/icons/Add"
import Textarea from 'react-textarea-autosize';
import { Button, ButtonTypes, ButtonSizes } from "../common/button"
import { connect } from "react-redux"
import { addTask } from "../actions/actions"

export const AddButton = (props) => {

    const [formIsOpen, setFormIsOpen] = useState(false);
    const [text, setText] = useState("");
    const list = props.list;
    const buttonText = list ? "Add another task" : "Add another list ";
    const placeholderText = list ? "Enter a title for the task..." : "Enter a title for the list...";

    const handleKeystroke = (event) => {
        if (event.keyCode === 13) {
            handleAddTask();
        }
    }

    const handleOnChange = (event) => {
        setText(event.currentTarget.value);
    }

    const renderAddButton = () => {
        
        return (
            <div className="list__new-task" onClick={() => setFormIsOpen(true)}>
                <Add height="12px" width="12px" fill="#696969" />
                <span>{buttonText}</span>
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
                    <Button title="Add Task" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#5aac44" fontColor="white" onClick={handleAddTask}/>
                    <Button title="Cancel" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#fd612c" fontColor="white" onClick={() => { setFormIsOpen(false); setText(""); }} />
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
            dispatch(addTask(title, list));
        }

        return 
    }

    return formIsOpen ? renderForm() : renderAddButton();
}

export default connect()(AddButton)