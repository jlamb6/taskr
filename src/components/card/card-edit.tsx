import * as React from "react"
import { Icon, IconColor } from "../../common/icons"
import { connect } from "react-redux"

export const CardEdit = (props) => {

    const toggleOpen = (event) => {
        props.action();
        event.stopPropagation();
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