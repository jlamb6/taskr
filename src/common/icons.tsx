import * as React from "react"
const classNames = require("classnames")
const circle = require("../../public/icons/circle-check.svg")

export enum IconName {  
    CheckedCircle = "circle-check",
    PersonAddOutlined = "addUser"
}

export enum IconColor {
    Black = "black",
    Grey = "grey",
    White = "white"
}

export interface IconProps {
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    name: IconName;
    color?: IconColor;
    class?: string;
}

const Icon = (props: IconProps) => {

    const { small, medium, large, ...rest } = props;

    const className = classNames(
        'icon',
        `icon-${props.name}`,
        `icon-${props.color}`,
        {
            'icon-sm': small,
            'icon-md': medium,
            'icon-lg': large
        }
    );   

    return (
        <span 
            className={className}
            role="presentation"
        />
    )
}

export default Icon