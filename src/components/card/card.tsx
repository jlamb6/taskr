import * as React from "react"
import CardInterface from "../../common/cardInterface"
import "./card.less"

export class Card extends React.Component<CardInterface> {

    public render() {
        return(
            <div className="card">
                <div className="card__title">
                    <div>{this.props.title}</div>
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
}
/*
export const Card = ({props: CardInterface}) => {

    return(
        <div className="card">
            <div className="card__title">
                <div>{props.title}</div>
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
*/
export default Card