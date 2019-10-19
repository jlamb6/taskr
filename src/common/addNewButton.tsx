import React, {useState, useEffect} from "react"
import Add from "@material-ui/icons/Add"
import Textarea from 'react-textarea-autosize';
import { Button, ButtonTypes, ButtonSizes } from "../common/button"
import { connect } from "react-redux"
import { Icon, IconColor } from "../common/icons"
import { addList, addTask } from "../actions/actions"

export const AddNewButton = (props) => {

    const [isListOpen, setIsListOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [text, setText] = useState("");
    const [form, setForm] = useState("");
    
    let placeholderText = "";
    let addButtonText = "";
    const buttonText = "New";
    
    const handleKeystroke = (event) => {
        if (event.keyCode === 13) {
            handleAddList();
        }
    }

    const handleChange = (event) => {
        setText(event.currentTarget.value);
    }

    const openForm = (event, form: string) => {
        event.stopPropagation();
        setForm(form);
        setIsFormOpen(true);
        setIsListOpen(false);
    } 

    const toggleList = () => {
        (isListOpen) ? setIsListOpen(false) : setIsListOpen(true);
    }

    const handleAddList = () => {
        const { dispatch } = props;
        const title = text;
        setText("");
        setIsFormOpen(false);

        if (text) {
            if (form === "list") dispatch(addList(title));
            else if (form === "task") dispatch(addTask(title, "123"));
        }
    }

    const renderAddButton = () => {
        return (
            <button className="new-button" onClick={toggleList} >
                <Icon name={"Add"} small={true} />
                <span>{buttonText}</span>
            </button>
        )
    }

    const renderList = () => {

        return (
            <div style={{position: "relative"}}>
                <button className="new-button" onClick={toggleList} onBlur={toggleList}>
                    <Icon name="Add" small={true} />
                    <span>{buttonText}</span>
                </button>
                <div className="new-button__actions">
                    <div className="new-button__list">
                        <div className="new-button__action-item"><Icon name="ComputerOutlined" small={true} />Board</div>
                        <div className="new-button__action-item" onClick={(e) => openForm(e, "list")}><Icon name="FormatListBulleted" small={true} />List</div>
                        <div className="new-button__action-item" onClick={(e) => openForm(e, "task")}><Icon name="CheckCircleOutlineOutlined" small={true} />Task</div>
                        <div className="new-button__action-item"><Icon name="LabelOutlined" small={true} />Label</div>
                        <div className="new-button__action-item"><Icon name="PersonAddOutlined" small={true} />Invite</div>
                    </div>
                </div>
            </div>
        )
    }

    const renderForm = (form: string) => {
        
        if (form === "list") {
            placeholderText = "Add a title for the list...";
            addButtonText = "Add List";
        }
        else if (form === "task") {
            placeholderText = "Add a title for the task...";
            addButtonText = "Add Task";
        }
       
        return renderListForm();
    }

    const handleBlur = (event) => {
        setIsFormOpen(false);
        setText("");
    }

    const renderListForm = () => {
        console.log(form);
 
        return (
            <div style={{position: "relative"}}>
                <button className="new-button" onClick={toggleList}>
                    <Icon name={"Add"} small={true} />
                    <span>{buttonText}</span>
                </button>
                <div className="new-button__form-container" onClick={(e) => e.stopPropagation()}>
                    <div className="new-button__form">
                        <Textarea 
                            placeholder={placeholderText} 
                            onChange={handleChange}
                            onKeyDown={handleKeystroke}
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
                        <Button title={addButtonText} buttonType={ButtonTypes.NO_BORDER} backgroundColor="#5aac44" fontColor="white" onMouseDown={handleAddList}/>
                        <Button title="Cancel" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#fd612c" fontColor="white" onClick={() => { setIsFormOpen(false); setText(""); }} />
                    </div>
                </div>
            </div>
        )
    }

    if (isListOpen) return renderList();
    else if (isFormOpen) return renderForm(form);
    else return renderAddButton();
} 

export default connect()(AddNewButton)