import * as React from "react"
import { useState } from "react"
import CardInterface from "../../common/cardInterface"
import { Icon } from "../../common/icons"
import { connect } from "react-redux"
import "./card.less"
import { applyOverlay } from "../../actions/actions"
import Checklist from "../checklist/checklist"
import ActivityLog from "../activityLog/activityLog"
import Chip from "./chips"
import CardActions from "./cardActions"

export const CardView = (props) => {
    const [details, setDetails] = useState(props.details)
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [checklists, setChecklists] = useState(props.checklists);
    const [activity, setActivity] = useState(props.activity)

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescChange = (event) => {
        setDescription(event.target.value);
    }

    const handleDescEnter = (event) => {
        if (event.keyCode === 13) setDescription(event);
    }

    const addChecklist = (title: String) => {
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
                    {details.map((cur: any, index: Number) => (
                        <Chip {...cur} key={index} />
                    ))}
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
                {(checklists.map((checklist: any, index: Number) => (
                    <Checklist key={index} {...checklist} delete={deleteChecklist} />))
                )}
                <ActivityLog activityLog={activity} />
            </div>
            <CardActions addChecklist={addChecklist} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { task: state }
}

export default connect(mapStateToProps)(CardView)