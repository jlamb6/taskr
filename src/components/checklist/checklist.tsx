import * as React from "react"
import { useState, useEffect } from "react"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import { Icon, IconColor } from "../../common/icons"
import ChecklistItem from "./checklistItem";

const Checklist = (props) => {

    const [ numItems, setNumItems ] = useState(props.list.length);
    const completed = (numItems > 0) ? props.list.filter(cur => cur.complete).length : 0;
    const [ numComplete, setNumComplete ] = useState(completed);

    const [progress, setProgress] = (numItems > 0) ? useState(Math.round((numComplete/numItems)*100)) : useState(0);
    
    const updateProgress = (change) => {
        if (change  === 1) setNumComplete(numComplete + 1);
        else setNumComplete(numComplete - 1);
    }

    useEffect(() => {
        setProgress(Math.round((numComplete/numItems)*100));
    })

    const flex = { display: "flex", alignItems: "center" };
    const flexBetween = { display: "flex", alignItems: "center", justifyContent: "space-between" };

    return (
        <div className="card-view__checklist">
            <div className="card-view__desc-header" style={flexBetween}>
                <div style={flex}>
                    <Icon name="FormatAlignLeft" medium={true} />
                    <span>{props.name}</span>
                </div>
                <div style={flex} className="button-list">
                    <Button 
                        title="Hide Complete" 
                        buttonType={ButtonTypes.DEFAULT} 
                        buttonSize={ButtonSizes.MEDIUM} 
                        fontColor="black" 
                    />
                    <Button 
                        title="Add Item" 
                        iconName="Add"
                        buttonType={ButtonTypes.ICON} 
                        buttonSize={ButtonSizes.MEDIUM} 
                        fontColor="black" 
                    />
                </div>
            </div>
            <div className="card-view__progress">
                <div className="progress-bar">
                    <div className="progress-bar__status">{progress}%</div>
                    <div className="progress-bar__container">
                        <div className="progress-bar__incomplete"></div>
                        <div className="progress-bar__complete" style={{width: `${progress}%`}}></div>
                    </div>
                </div>
            </div>
            <div className="checklist__list">
                {props.list.map((cur, index) => {
                    return (
                        <ChecklistItem 
                            title={cur.title} 
                            complete={cur.complete} 
                            key={index} 
                            onCheck={setProgress}
                            update={updateProgress}
                        />
                    )
                })}
            </div>
        </div>
    )
}

/*
<div className="checklist__item item-complete">
                    <Icon name="CheckCircle" medium={true} />
                    <p><em>This is item number one</em></p>
                </div>
                <div className="checklist__item">
                    <Icon name="RadioButtonUnchecked" medium={true} />
                    <p>This is item number two</p>
                </div>
                <div className="checklist__item">
                    <Icon name="RadioButtonUnchecked" medium={true} />
                    <p>This is item number three</p>
                </div>
                */

export default Checklist