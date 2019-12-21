import * as React from "react"
import CardInterface from "../../common/cardInterface"
import { Icon, IconColor } from "../../common/icons"
import { connect } from "react-redux"
import "./card.less"

export class CardView extends React.Component<CardInterface> {

    public render() {
        return (
            <div className="card-view remove">
                <div className="card-view__wrapper">
                    <div className="card-view__header">
                        <h2>{this.props.title}</h2>
                        <Icon name="MoreHoriz" medium={true} />
                        <Icon name="CancelOutlined" medium={true} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { task: state }
}

export default connect(mapStateToProps)(CardView)