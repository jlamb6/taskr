import * as React from "react"

export interface CardInterface {
    id: string;
    title: string;
    dateCreated: Date;
    members: [string];
    activity: [string];
    checklist?: [string];
    dueDate?: Date;
}

export default CardInterface