import * as React from "react"
import { Icon, IconColor } from "./icons"
import { connect } from "react-redux"
import { applyOverlay } from "../actions/actions"
import FixedContainer from "./fixedContainer"

export const Overlay = (props) => {

    const open = props.open;
    const closeOverlayOnBlur = (event) => {
        if (event.target === event.currentTarget) props.dispatch(applyOverlay(null, null, null, true));
    }

    const closeOverlay = (event) => {
        props.dispatch(applyOverlay(null, null, null, true));
    }

    if (open) {
        return (
            <div className="overlay" onClick={closeOverlayOnBlur} >
                <div className="close-circle" onClick={closeOverlay} >
                    {Icon({name: "Close", color: IconColor.WHITE, medium: true})}
                </div>
                <FixedContainer element={props.element} cardId={props.overlay.cardId} listId={props.overlay.listId} />
            </div>
        )
    }
    else {
        return (
            <div className="overlay hidden" ></div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { overlay: state.board.overlay }
}
  
export default connect(mapStateToProps)(Overlay)