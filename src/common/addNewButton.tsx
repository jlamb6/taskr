import React, {useState, useEffect} from "react"
import Add from "@material-ui/icons/Add"
import Textarea from 'react-textarea-autosize';
import { Button, ButtonTypes, ButtonSizes } from "../common/button"
import { connect } from "react-redux"
import { Icon, IconColor } from "../common/icons"
import { addList } from "../actions/actions"

export const AddNewButton = (props) => {

    const [isListOpen, setIsListOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [text, setText] = useState("");
    const [form, setForm] = useState("");

    const buttonText = "New";
    const addButtonText = "New List";
    const placeholderText = "Add a title for the list...";
    
    const handleKeystroke = (event) => {
        if (event.keyCode === 13) {
            handleAddList();
        }
    }

    const handleChange = (event) => {
        setText(event.currentTarget.value);
    }

    const openForm = (event, list: string) => {
        event.stopPropagation();
        setForm(list);
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
            dispatch(addList(title));
        }

        return 
    }

    const renderAddButton = () => {
        return (
            <div className="new-button" onClick={toggleList} >
                <Icon name={"Add"} small={true} />
                <span>{buttonText}</span>
            </div>
        )
    }

    const renderList = () => {

        return (
            <div className="new-button" onClick={toggleList} onBlur={toggleList}>
                <Icon name={"Add"} small={true} />
                <span>{buttonText}</span>
                <div className="new-button__actions">
                    <div className="new-button__list">
                        <div className="new-button__action-item"><Icon name="ComputerOutlined" small={true} />Board</div>
                        <div className="new-button__action-item" onClick={(e) => openForm(e, "list")}><Icon name="FormatListBulleted" small={true} />List</div>
                        <div className="new-button__action-item"><Icon name="CheckCircleOutlineOutlined" small={true} />Task</div>
                        <div className="new-button__action-item"><Icon name="LabelOutlined" small={true} />Label</div>
                        <div className="new-button__action-item"><Icon name="PersonAddOutlined" small={true} />Invite</div>
                    </div>
                </div>
            </div>
        )
    }

    const renderForm = (form: string) => {
        if (form === "list") return renderListForm();
    }

    const renderListForm = () => {
        return (
            <div className="new-button" onClick={toggleList}>
                <Icon name={"Add"} small={true} />
                <span>{buttonText}</span>
                <div className="new-button__form-container" onClick={(e) => e.stopPropagation()}>
                    <div className="new-button__form">
                        <Textarea 
                            placeholder={placeholderText} 
                            onChange={handleChange}
                            onKeyDown={handleKeystroke}
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
                    <Button title={addButtonText} buttonType={ButtonTypes.NO_BORDER} backgroundColor="#5aac44" fontColor="white" onClick={handleAddList}/>
                    <Button title="Cancel" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#fd612c" fontColor="white" onClick={() => { setIsFormOpen(false); setText(""); }} />
                </div>
                </div>
            </div>
        )
    }

    //return (!isListOpen) ? renderAddButton() : renderList();
    if (isListOpen) return renderList();
    else if (isFormOpen) return renderForm(form);
    else return renderAddButton();
} 

export default connect()(AddNewButton)