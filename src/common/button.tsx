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
    LARGE = 'large',
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
    onMouseDown?: React.MouseEventHandler;
    large?: boolean;
}

export class Button extends React.Component<ButtonProps> {

    public render() {

        const isSmall = (this.props.large) ? false : true;
        const isLarge = (this.props.large) ? true : false;
        const { title, buttonType, buttonSize, fontColor, backgroundColor, onClick, onMouseDown, ...rest } = this.props;
        const className = classNames('button', 
            buttonSize || ButtonSizes.DEFAULT,
            fontColor || "inherit",
            {
                [`btn-${buttonType}`]: true
            }
        );

        return(
            <button onMouseDown={onMouseDown} onClick={onClick} type="button" style={{background: backgroundColor || "inherit"}} className={className}>
                { (this.props.iconName) ? Icon({name: this.props.iconName, small: true, color: IconColor.GREY}): null }
                {this.props.title}
            </button>
        )
    }
}

//export default Button