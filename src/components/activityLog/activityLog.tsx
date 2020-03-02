import * as React from "react"
import { useState } from "react"
import { Icon } from "../../common/icons"
import { Button, ButtonSizes, ButtonTypes } from "../../common/button"
import AddActivity from "./addActivity"
import "./activityLog.less"

const ActivityLog = (props) => {
  const [isFiltered, setFilter]  = useState(false);
  const [activity, setActivity] = useState(props.activityLog)

  const flex = { display: "flex", alignItems: "center" };
  const flexBetween = { display: "flex", alignItems: "center", justifyContent: "space-between" };

  const filter = () => {
    (isFiltered) ? setFilter(false) : setFilter(true);
  }

  const addActivity = (text: String, user: String) => {
    const newActivity = {
      message: text,
      user: user,
      date: Date()
    }
    const newActivityLog = activity.concat(newActivity);
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
        {activity.map((cur, index) => {
          return (
            <div key={index}>{cur.message}</div>
          )
        })}
      </div>
    </div>
  )
}

export default ActivityLog