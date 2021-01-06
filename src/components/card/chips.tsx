import * as React from "react"
import UserInitials from "../../common/user-circle"
import { Icon } from "../../common/icons"

const Chip = (props) => {

  const userInitials = (
    <div className="card__detail">
      <UserInitials userName={props.username} initials={props.initials} small={true} id={props.id} /> 
      <div className="card__detail__wrapper">
        <span>Assigned to {props.fname}</span>
      </div>
    </div>
  )

  const complete = (
    <div className="card__detail">
      <div className="card__detail__wrapper">
        <Icon name="Check" small={true} />
        <span>Complete</span>
      </div>
    </div>
  )

  const dueDate = (
    <div className="card__detail"> 
      <div className="card__detail__wrapper">
        <Icon name="EventAvailable" small={true} />
        <span>Due {props.date}</span>
      </div>
    </div>
  )

  if (props.type === "user") return userInitials;
  else if (props.type === "complete") return complete;
  else if (props.type === "dueDate") return dueDate;
  else return null;
}

export default Chip