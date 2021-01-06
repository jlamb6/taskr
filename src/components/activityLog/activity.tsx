import * as React from "react"
import {useState, useEffect} from "react"
import "./activityLog.less"
import UserInitials from "../../common/user-circle"

const Activity = (props) => {
  const [timeSinceCreation, setTimeSinceCreation] = useState(props.timeCreated)

  return (
    <div className="activity">
      <UserInitials userName="jlamb" id="123fdfd" initials="JL" />
      <div>
        <div>
          <p><strong>{props.user}</strong>  <span>{props.action}</span></p>
          <span className="time-of-creation">{timeSinceCreation}</span>
        </div>
      </div>
    </div>
  )
}

export default Activity