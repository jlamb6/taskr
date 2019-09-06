import * as React from "react"
import classNames from "classnames"
import { Icon, IconColor } from "../common/icons"
import "./button.less"

export enum ButtonTypes {
    DEFAULT = 'default',
    ICON = 'icon',
    NO_BORDER = "no-border",
    NO_BORDER_ICON = "no-border-icon",
    PRIMARY = 'primary',
    DANGER = 'danger',
    DISABLED = 'disabled',
    LINKBUTTON = 'linkButton',
}
export enum ButtonSizes {
    SMALL = 'small',
    MEDIUM = 'medium',
    DEFAULT = 'default',
    WIDE = 'wide',
    FULLWIDTH = 'fullwidth',
}
  
interface ButtonProps {
    title: string;
    buttonType: ButtonTypes;
    iconName?: string;
    backgroundColor?: string;
    fontColor?: string;
    buttonSize?: ButtonSizes;
    onClick?: React.MouseEventHandler;
}

export class Button extends React.Component<ButtonProps> {

    public render() {

        const { title, buttonType, buttonSize, fontColor, backgroundColor, ...rest } = this.props;
        const className = classNames('button', 
            buttonSize || ButtonSizes.DEFAULT,
            fontColor || "inherit",
            {
                [`btn-${buttonType}`]: true
            }
        );

        return(
            <button type="button" style={{background: backgroundColor || "inherit"}} className={className}>
                { (this.props.iconName) ? Icon({name: this.props.iconName, small: true, color: IconColor.GREY}): null }
                {this.props.title}
            </button>
        )
    }
}

//export default Button