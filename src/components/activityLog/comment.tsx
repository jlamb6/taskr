import * as React from "react"
import {useState, useEffect} from "react"
import "./activityLog.less"
import UserInitials from "../../common/user-circle"
import {Button, ButtonTypes} from "../../common/button"
import Textarea from 'react-textarea-autosize'

const Comment = (props) => {
  const [title, setTitle] = useState(props.comment)
  const [timeSinceCreation, setTimeSinceCreation] = useState(props.timeCreated)
  const [isEditing, setIsEditing] = useState(false)
  const [originalText, setOriginalText] = useState(props.comment)
  const textarea = React.createRef<HTMLTextAreaElement>()

  const toggleEdit = () => {
    if (isEditing) setIsEditing(false);
    else setIsEditing(true);
  }

  const handleOnChange = (event) => {
    if (isEditing) setTitle(event.currentTarget.value);
  }

  const saveText = () => {
    setOriginalText(title);
    setIsEditing(false);
  }

  const deleteComment = () => {
    props.delete(props.id);
  }

  const noEdit = (
    <div className="comment">
      <UserInitials userName="jlamb" id="123fdfd" initials="JL" />
      <div>
        <div>
          <p><strong>{props.user}</strong>  <span>{timeSinceCreation}</span></p>
          <div className="comment__block">{title}</div>
        </div>
        <div className="comment__actions">
          <span onClick={toggleEdit}>Edit</span> - <span onClick={deleteComment}>Delete</span>
        </div>
      </div>
    </div>
  )

  const edit = (
    <div className="comment">
      <UserInitials userName="jlamb" id="123fdfd" initials="JL" />
      <div>
        <div>
          <p><strong>{props.user}</strong>  <span>{timeSinceCreation}</span></p>
          <div className="comment__block full">
            <Textarea 
              ref={textarea}
              autoFocus
              onChange={(e) => handleOnChange(e)}
              value={title}
              style={{
                  resize: "none",
                  overflow: "hidden"
              }}
            >
            </Textarea>
            <div className="new-activity__actions">
              <Button 
                title="Save" 
                buttonType={ButtonTypes.NO_BORDER} 
                backgroundColor="#5aac44" 
                fontColor="white" 
                onMouseDown={saveText}
              />
              <Button 
                title="Cancel" 
                buttonType={ButtonTypes.NO_BORDER} 
                backgroundColor="#fd612c" 
                fontColor="white" 
                onClick={() => { setIsEditing(false); setTitle(originalText); }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (isEditing) return edit;
  else return noEdit;
}

export default Comment