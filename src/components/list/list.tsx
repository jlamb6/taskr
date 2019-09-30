import * as React from "react"
import { useState, useEffect } from "react"
import Card from "../card/card"
import CardInterface from "../../common/cardInterface"
import { Icon, IconColor } from "../../common/icons"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import Add from "@material-ui/icons/Add"
import "./list.less"
import AddButton from "../../common/addButton"

export interface ListProps {
    id: string,
    name: string,
    tasks: CardInterface[]
}

export const List = ( props: ListProps ) => {

    return (
        <div className="list">
            <div className="list__header">
                <div>{props.name}</div>
            </div>
            <div className="list__body">
                {props.tasks.map(cur => 
                    <Card task={cur} key={cur.id} />
                )}
            </div>
            <div className='list__footer'>
                <AddButton list={props.id} />
            </div>
        </div>
    )
}

export default List