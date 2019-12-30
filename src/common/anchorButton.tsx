import React, { useState, useEffect } from "react"
import { Button, ButtonTypes, ButtonSizes } from "../common/button"
import { connect } from "react-redux"
import { Icon, IconColor } from "../common/icons"

export const AnchorButton = (props) => {

    const withIcon = () => {
        const styles = {
            fontSize: ".8em"
        }
        return (
            <a className={props.classes} >
                <span className="icon-left" style={styles}>
                    <Icon name={props.icon} small={true} />
                </span>
                <span className={props.childClasses}>{props.title}</span>
            </a>
        )
    }

    const withoutIcon = () => {
        return (
            <a className={props.classes} >
                <span className={props.childClasses}>{props.title}</span>
            </a>
        )
    }

    if (props.hasIcon) return withIcon();
    else return withoutIcon();
}

export default connect()(AnchorButton)