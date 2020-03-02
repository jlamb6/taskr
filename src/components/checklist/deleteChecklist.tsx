import React, {useState, MouseEvent} from "react"
import { connect } from "react-redux"
import { Icon } from "../../common/icons"

export const DeleteChecklistButton = (props) => {

    const [isListOpen, setIsListOpen] = useState(false);
    const buttonText = "Delete";

    const toggleList = () => {
        (isListOpen) ? setIsListOpen(false) : setIsListOpen(true);
    }

    const deleteChecklist = (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        props.action(props.id);
      }
    }

    const renderAddButton = () => {
        return (
            <button className="checklist__delete" onClick={toggleList} >
                <Icon name="DeleteOutline" small={true} />
                <span>{buttonText}</span>
            </button>
        )
    }

    const renderList = () => {

        return (
            <div style={{position: "relative"}}>
              <button className="checklist__delete" onClick={toggleList} onBlur={toggleList}>
                <Icon name="DeleteOutline" small={true} />
                <span>{buttonText}</span>
              </button>
              <div className="checklist__delete-actions">
                <div className="delete__title">
                  <span>Delete {props.title}</span>
                </div>
                <div className="delete__body">
                  <p>Deleting a checklist is permanent and there is no way to get it back.</p>
                </div>
                <div className="delete__button">
                  <button onClick={deleteChecklist}>Delete</button>
                </div>
                <span className="delete__close" onClick={toggleList}>
                  <Icon name="CancelOutlined" medium={true} />
                </span>
              </div>
            </div>
        )
    }

    if (isListOpen) return renderList();
    else return renderAddButton();
} 

export default connect()(DeleteChecklistButton)