import * as React from "react"
import { useState } from "react"
import CardInterface from "../../common/cardInterface"
import { Icon } from "../../common/icons"
import { connect } from "react-redux"
import "./card.less"
import { applyOverlay } from "../../actions/actions"
import UserInitials from "../../common/user-circle"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import Checklist from "../checklist/checklist"
import ActivityLog from "../activityLog/activityLog"
import ActionButton from "./actionButton"

export const CardView = (props) => {

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [checklists, setChecklists] = useState(props.checklists);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescChange = (event) => {
        setDescription(event.target.value);
    }

    const handleDescEnter = (event) => {
        if (event.keyCode === 13) setDescription(event);
    }

    const addChecklist = (title) => {
        const checklist = {
            name: title,
            id: "random id",
            checklist: []
        }
        const newChecklists = checklists.concat(checklist);
        setChecklists(newChecklists);
    }

    const deleteChecklist = (id: String) => {
        const newChecklists = checklists.filter(cur => cur.id !== id);
        setChecklists(newChecklists);
    }

    const fullWidth = { width: "100%" };
    const listTitle = { paddingLeft: "10px", margin: "0", fontSize: ".875em" };
    const anchorStyle = { color: "inherit" };
    const flex = { display: "flex", alignItems: "center" };
    const flexBetween = { display: "flex", alignItems: "center", justifyContent: "space-between" };

    const closeView = (event) => {
        props.dispatch(applyOverlay(null, null, null, null, true));
    }

    return (
        <div className="card-view">
            <div className="card-view__wrapper">
                <div className="card-view__header">
                    <div style={fullWidth}>
                        <h2 className="card-view__title" hidden>{title}</h2>
                        <textarea className="card-vew__title__text" value={title} onChange={handleTitleChange}></textarea>
                        <p style={listTitle}>in list <a style={anchorStyle} href="#">{props.listId}</a></p>
                    </div>
                    <span className="card-view__header__icon right" onClick={closeView}>
                        <Icon name="CancelOutlined" medium={true} />
                    </span>
                </div>
                <div className="card-view__details">
                    <div className="card__detail">
                        <div className="card__detail__wrapper">
                            <Icon name="Check" small={true} />
                            <span>Complete</span>
                        </div>
                    </div>
                    <div className="card__detail">
                        <UserInitials userName="Jake Lamb" initials="JL" small={true} id="z123" /> 
                        <div className="card__detail__wrapper">
                            <span>Assigned to Jake L.</span>
                        </div>
                    </div>
                    <div className="card__detail"> 
                        <div className="card__detail__wrapper">
                            <Icon name="EventAvailable" small={true} />
                            <span>Due Tues, Mar 15</span>
                        </div>
                    </div>
                </div>
                <div className="card-view__desc">
                    <div className="card-view__desc-header">
                        <Icon name="FormatAlignLeft" medium={true} />
                        <span>Description</span>
                    </div>
                    <div className="card-view__desc-body">
                        <textarea 
                            className="card-view__desc__text" 
                            value={description} 
                            onChange={handleDescChange} 
                            onKeyPress={handleDescEnter}
                        />
                    </div>
                </div>
                {(checklists.map((checklist, index) => (
                    <Checklist key={index} {...checklist} delete={deleteChecklist} />))
                )}
                <ActivityLog activityLog={[]} />
            </div>
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
                        action={addChecklist}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { task: state }
}

export default connect(mapStateToProps)(CardView)