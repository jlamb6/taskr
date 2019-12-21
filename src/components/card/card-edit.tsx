import * as React from "react"
import { useState } from "react"
import Overlay from "../../common/overlay"
import { Icon, IconColor } from "../../common/icons"
import { connect } from "react-redux"
import { applyOverlay } from "../../actions/actions"

export const CardEdit = (props) => {

    //const [isEditOpen, setEditOpen] = useState(false);

    const toggleOpen = (event) => {
        props.dispatch(applyOverlay(event.currentTarget.parentElement.parentElement, false));
    }

    return  (
        <div className="card__edit hidden" onClick={toggleOpen}>    
            <div className="card__edit-btn">
                {Icon({name: "EditOutlined", color: IconColor.GREY, small: true})}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { overlay: state.board.overlay }
  }
  
  export default connect(
    mapStateToProps
  )(CardEdit)