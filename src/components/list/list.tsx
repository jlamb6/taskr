import * as React from "react"
import Card from "../card/card"
import CardInterface from "../../common/cardInterface"
import { Icon, IconColor } from "../../common/icons"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import "./list.less"

export interface ListProps {
    name: string,
    cards: [CardInterface]
}

export const List = ( props: ListProps ) => (
    <div className="list">
        <div className="list__header">
            <div>{props.name}</div>
        </div>
        <div className="list__body">
            {props.cards.map(cur => <Card id={cur.id} title={cur.title} dateCreated={cur.dateCreated} members={cur.members} activity={cur.activity} key={cur.id}/>)}
        </div>
        <div className='list__footer'>
            <Button title="Add new task" buttonSize={ButtonSizes.FULLWIDTH} buttonType={ButtonTypes.ICON} />
        </div>
    </div>
)

export default List