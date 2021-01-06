import * as React from "react"

interface ActivityInterface {
    id: string,
    type: string,
    timeCreated: string,
    title: string,
    user: string
}

export interface CardInterface {
    id: string;
    title: string;
    dateCreated: Date;
    members: string[];
    activity: ActivityInterface[];
    checklist?: string[];
    dueDate?: Date;
}

export default CardInterface