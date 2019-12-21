import * as React from "react"
import { Icon, IconColor } from "./icons"
import { connect } from "react-redux"
import { applyOverlay } from "../actions/actions"
import FixedContainer from "./fixedContainer"

export const Overlay = (props) => {

    const open = props.open;
/*
    const cleanup = () => {

    }
*/
    
    const closeOverlayOnBlur = (event) => {
        // handle side effects here before state update
        
        // run state updated
        if (event.target === event.currentTarget) props.dispatch(applyOverlay(null, true));
    }

    const closeOverlay = (event) => {
        // handle side effects here before state update
        // run state updated
        props.dispatch(applyOverlay(null, true));
    }

    if (open) {
        return (
            <div className="overlay" onClick={closeOverlayOnBlur} >
                <div className="close-circle" onClick={closeOverlay} >
                    {Icon({name: "Close", color: IconColor.WHITE, medium: true})}
                </div>
                <FixedContainer element={props.element} />
            </div>
        )
    }
    else {
        return (
            <div className="overlay hidden" ></div>
        )
    }
}

export default connect()(Overlay)