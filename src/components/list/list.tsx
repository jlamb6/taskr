import * as React from "react"
import Card from "../card/card"
import CardInterface from "../../common/cardInterface"
import { Icon, IconColor } from "../../common/icons"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import Add from "@material-ui/icons/Add"
import "./list.less"

export interface ListProps {
    id: string,
    name: string,
    cards: [CardInterface]
}

// <Button title="Add new task" buttonSize={ButtonSizes.FULLWIDTH} buttonType={ButtonTypes.NO_BORDER_ICON} iconName="Add" />

export const List = ( props: ListProps ) => (
    <div className="list">
        <div className="list__header">
            <div>{props.name}</div>
        </div>
        <div className="list__body">
            {props.cards.map(cur => <Card listId={cur.listId} id={cur.id} title={cur.title} dateCreated={cur.dateCreated} members={cur.members} activity={cur.activity} key={cur.id}/>)}
        </div>
        <div className='list__footer'>
            <div className="list__new-task">
                <Add height="12px" width="12px" fill="#696969" />
                <span>Add new task</span>
            </div>
        </div>
    </div>
)

export default List