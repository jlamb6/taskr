import * as React from "react"
import CardInterface from "../../common/cardInterface"
import "./card.less"
import { connect } from "react-redux"

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


const mapStateToProps = (state, ownProps) => {
    console.log(state);
    console.log(ownProps);
    const task = state.tasks.filter(cur => cur.id === ownProps.id)[0];
    console.log(task);
    return { task: task }
}

export default connect(mapStateToProps)(Card)