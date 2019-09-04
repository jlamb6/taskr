import * as React from "react"
const classNames = require("classnames")
const circle = require("../../public/icons/circle-check.svg")

export enum IconName {  
    CheckedCircle = "circle-check",
    PersonAddOutlined = "addUser"
}

export enum IconColor {
    BLACK = "black",
    GREY = "grey",
    WHITE = "white"
}

export interface IconProps {
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    name: string;
    color?: IconColor;
    class?: string;
}

export const Icon = (props: IconProps) => {

    const { name, small, medium, large, ...rest } = props;

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

    let resolved = require(`@material-ui/icons/${name}`).default;

    if (!resolved) {
        throw Error(`Couldn't find the ${name} icon at @material-ui/icons/${name}.`);
    }

    return React.createElement(resolved, {className: className});
}

//export default Icon