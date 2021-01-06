import * as React from "react"
import { useState, useEffect } from "react"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import { Icon } from "../../common/icons"
import ChecklistItem from "./checklistItem";
import { AddChecklistButton } from "./addChecklistItem";
import DeleteChecklistButton from "./deleteChecklist";

const Checklist = (props) => {

    const [ list, setList ] = useState(props.checklist);
    const [ numItems, setNumItems ] = useState(list.length);
    const completed = (numItems > 0) ? list.filter(cur => cur.complete).length : 0;
    const [ numComplete, setNumComplete ] = useState(completed);
    const [ isFiltered, setFilter ] = useState(false);
    const [ progress, setProgress ] = useState((numItems > 0) ? Math.round((numComplete/numItems)*100) : 0);
    
    const filter = () => {
        if (isFiltered) setFilter(false);
        else  setFilter(true);
    }
    
    const updateProgress = (change) => {
        if (change  === 1) setNumComplete(numComplete + 1);
        else setNumComplete(numComplete - 1);
    }

    const addChecklistItem = (title) => {
        const newItem = {
            title: title,
            complete: false
        }
        const newList = list.concat(newItem);
        setList(newList);
        setNumItems(numItems + 1);
    }

    useEffect(() => {
        if (numItems > 0) setProgress(Math.round((numComplete/numItems)*100));
        else setProgress(0);
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
                        title={(isFiltered) ? `Show Complete (${numComplete})` : "Hide Complete"} 
                        iconName={(isFiltered) ? "Visibility" : "VisibilityOff"}
                        buttonType={ButtonTypes.ICON} 
                        buttonSize={ButtonSizes.MEDIUM} 
                        fontColor="black"
                        onClick={filter} 
                    />
                    <DeleteChecklistButton 
                        title={props.name} 
                        action={props.delete} 
                        id={props.id} 
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
                {list.map((cur, index) => {
                    return (
                        <ChecklistItem 
                            title={cur.title} 
                            complete={cur.complete} 
                            key={index} 
                            onCheck={setProgress}
                            update={updateProgress}
                            hide={(isFiltered && cur.complete)}
                        />
                    )
                })}
                <div className='checklist__footer'>
                    <AddChecklistButton 
                        addItem={addChecklistItem}
                        text={(numItems > 1) ? "Add another checklist item" : "Add a checklist item"} />
                </div>
            </div>
        </div>
    )
}

export default Checklist