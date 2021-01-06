import * as React from "react"
import ActionButton from "./actionButton"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"

const CardActions = (props) => (
  <div className="card-view__actions">
      <div className="actions__container">
          <h4>Add to Task</h4>
          <Button 
              title="Members"
              iconName="PeopleOutline"
              buttonType={ButtonTypes.ICON} 
              buttonSize={ButtonSizes.FULLWIDTH} 
              fontColor="black" 
          />
          <Button 
              title="Labels"
              iconName="Label"
              buttonType={ButtonTypes.ICON} 
              buttonSize={ButtonSizes.FULLWIDTH} 
              fontColor="black" 
          />
          <Button 
              title="Due Date"
              iconName="CalendarToday"
              buttonType={ButtonTypes.ICON} 
              buttonSize={ButtonSizes.FULLWIDTH} 
              fontColor="black" 
          />
          <ActionButton 
              buttonText="Checklist"
              iconName="CheckCircleOutline"
              label="Title"
              inputType="text"
              placeholder="Checklist"
              formTitle="Add Checklist"
              actionButtonText="Add"
              action={props.addChecklist}
          />
      </div>
  </div>
)

export default CardActions