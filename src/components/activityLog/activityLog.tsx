import * as React from "react"
import { useState } from "react"
import { Icon } from "../../common/icons"
import { Button, ButtonSizes, ButtonTypes } from "../../common/button"
import AddActivity from "./addActivity"
import Activity from "./activity"
import Comment from "./comment"
import "./activityLog.less"

const ActivityLog = (props) => {
  const [isFiltered, setFilter]  = useState(false);
  const [activity, setActivity] = useState(props.activityLog)
  const [nextID, setNextID] = useState(100)

  const flex = { display: "flex", alignItems: "center" };
  const flexBetween = { display: "flex", alignItems: "center", justifyContent: "space-between" };

  const filter = () => {
    (isFiltered) ? setFilter(false) : setFilter(true);
  }

  const addActivity = (text: String, user: String, type: String) => {
    const newActivity = {
      type: type,
      id: `${nextID}`,
      message: text,
      user: user,
      date: Date()
    }
    console.log(newActivity);
    const newActivityLog = [newActivity].concat(activity);
    console.log(newActivityLog);
    setNextID(nextID + 1);
    setActivity(newActivityLog);
  }

  const deleteActivity = (id: String) => {
    const newActivityLog = activity.filter(cur => cur.id !== id);
    setActivity(newActivityLog);
  }

  return (
    <div className="card-view__activity">
      <div className="activity__header" style={flexBetween}>
          <div style={flex}>
              <Icon name="FormatAlignLeft" medium={true} />
              <span>Activity Log</span>
          </div>
          <div style={flex} className="activity__buttons">
              <Button 
                title={(isFiltered) ? "Show Activity" : "Hide Activity"} 
                iconName={(isFiltered) ? "Visibility" : "VisibilityOff"}
                buttonType={ButtonTypes.ICON} 
                buttonSize={ButtonSizes.MEDIUM} 
                fontColor="black"
                onClick={filter} 
              />
          </div>
      </div>
      <div className="activity__list">
        <AddActivity addItem={addActivity} />
        {activity.map((cur) => {
          if (cur.type === "comment") {
            return (
              <Comment 
                key={cur.id} 
                id={cur.id}
                comment={cur.message} 
                timeCreated="2 hours ago" 
                user="Jake Lamb" 
                delete={deleteActivity}
              />
            )
          }
          else if (cur.type === "activity" && !isFiltered) {
            return (
              <Activity
                key={cur.id}
                id={cur.id}
                user={cur.user}
                timeCreated={cur.timeCreated}
                action={cur.title}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default ActivityLog