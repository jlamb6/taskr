import React, {useState} from "react"
import Textarea from 'react-textarea-autosize'
import UserInitials from "../../common/user-circle"
import { Button, ButtonTypes } from "../../common/button"
import { connect } from "react-redux"

export const AddActivity = (props) => {

    const [formIsOpen, setFormIsOpen] = useState(false);
    const [text, setText] = useState("");
    const list = props.list;
    const placeholderText = "Post a comment...";

    const handleOnChange = (event) => {
        if (formIsOpen) setText(event.currentTarget.value);
    }

    const handleBlur = () => {
        setText("");
        setFormIsOpen(false);
    }

    const renderAddButton = () => {
        
        return (
            <div className="new-activity" onClick={() => setFormIsOpen(true)}>
                <UserInitials userName="Jake Lamb" initials="JL" small={true} id="z123" /> 
                <div className="new-activity__body">
                  <Textarea 
                    placeholder={placeholderText} 
                    onChange={(e) => handleOnChange(e)}
                    onBlur={handleBlur}
                    value={text}
                    style={{
                        resize: "none",
                        overflow: "hidden"
                    }}
                  >
                  </Textarea>
                </div>
            </div>
        )
    }

    const renderForm = () => {

        return (
            <div className="new-activity">
              <UserInitials userName="Jake Lamb" initials="JL" small={true} id="z123" /> 
              <div className="new-activity__body active">
                <Textarea 
                  placeholder={placeholderText} 
                  onChange={(e) => handleOnChange(e)}
                  onBlur={handleBlur}
                  value={text}
                  autoFocus
                  style={{
                      resize: "none",
                      overflow: "hidden"
                  }}
                >
                </Textarea>
                <div className="new-activity__actions">
                  <Button title="Post Comment" buttonType={ButtonTypes.NO_BORDER} backgroundColor="#e8e9ea" fontColor="dark-grey" onMouseDown={handleAddTask}/>
                </div>
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
    }

    return formIsOpen ? renderForm() : renderAddButton();
}

export default connect()(AddActivity)