import * as React from "react"
import classNames from "classnames"
import "./button.less"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

export enum ButtonTypes {
    DEFAULT = 'default',
    ICON = 'icon',
    PRIMARY = 'primary',
    DANGER = 'danger',
    DISABLED = 'disabled',
    LINKBUTTON = 'linkButton',
}
export enum ButtonSizes {
    DEFAULT = 'default',
    WIDE = 'wide',
    FULLWIDTH = 'fullwidth',
}
  
interface ButtonProps {
    title: string;
    buttonType: ButtonTypes;
    iconName?: string;
    backgroundColor?: string;
    buttonSize?: ButtonSizes;
    onClick?: React.MouseEventHandler;
}

export class Button extends React.Component<ButtonProps> {

    public render() {

        const { title, buttonType, ...rest } = this.props;
        const className = classNames('button', {
            [`btn-${buttonType}`]: true
        });

        return(
            <button type="button" className={className}>
                <PersonAddOutlinedIcon fill="white"/>
                {this.props.title}
            </button>
        )
    }
}

//export default Button