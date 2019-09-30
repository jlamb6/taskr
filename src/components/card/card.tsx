import * as React from "react"
import CardInterface from "../../common/cardInterface"
import "./card.less"
import { connect } from "react-redux"
import { grabTask } from "../../actions/actions"

export const Card = (props) => {

    return(
        <div className="card">
            <div className="card__title">
                <div>{props.task.title}</div>
            </div>
            <div className="card__body">
                <div className="card__icons">

                </div>
                <div className="card__members">

                </div>
            </div>
        </div>
    )
}

export default Card