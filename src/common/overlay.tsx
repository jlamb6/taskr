import * as React from "react"
import { Icon, IconColor } from "./icons"
import { connect } from "react-redux"
import { applyOverlay } from "../actions/actions"
import FixedContainer from "./fixedContainer"
import CardView from "../components/card/card-view"

export const Overlay = (props) => {

    const open = props.open;
    const container = () => {
        const type = props.overlay.type;
        if (type === "cardEdit") {
            return (
                <div></div>
            );
        }
        else if (type === "cardView") {
            const list = props.lists.filter(cur => cur.id === props.overlay.listId)[0];
            const card = list.tasks.filter(cur => cur.id === props.overlay.cardId)[0];
            return (
                <CardView {...card} listId={list.name} />
            )
        }
    }

    const closeOverlayOnBlur = (event) => {
        if (event.target === event.currentTarget) props.dispatch(applyOverlay(null, null, null, null, true));
    }

    const closeOverlay = (event) => {
        props.dispatch(applyOverlay(null, null, null, null, true));
    }

    if (open) {
        if (props.overlay.type === "cardEdit")
            return (
                <div className="overlay" onClick={closeOverlayOnBlur} >
                    <div className="close-circle" onClick={closeOverlay} >
                        {Icon({name: "Close", color: IconColor.WHITE, medium: true})}
                    </div>
                    {container()}
                </div>
            )
        else if (props.overlay.type === "cardView") {
            return (
                <div className="overlay flex" onClick={closeOverlayOnBlur} >
                    {container()}
                </div>
            )
        }
    }
    else {
        return (
            <div className="overlay hidden" ></div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { overlay: state.board.overlay, lists: state.lists.lists }
}
  
export default connect(mapStateToProps)(Overlay)