import * as React from "react"
import "./menu.less"
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import AddIcon from '@material-ui/icons/Add';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import UserInitials from "../../common/user-circle";
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../../actions/actions"

const classNames = require("classnames")

interface MenuItemProps {
    title?: string;
    icon?: string;
}

const MenuItem = (props: MenuItemProps) => {
    
    return (
        <a>
            <div style={{marginLeft: "8px"}}>{props.title}</div>
        </a>
    )
}

const Menu_Side = (props) => {

    const toggle = () => {
        const { dispatch, open } = props;
        dispatch(toggleMenu(open));
    }

    const renderCollapsedMenu = () => {
        return (
            <nav className="menu menu__collapse">
                <div className="menu__header">
                    <MenuIcon onClick={toggle} className="menu__toggle"/>
                </div>
                <div className="menu__nav-links">
                    <div className="menu__nav-link"><HomeOutlinedIcon /><MenuItem /></div>
                    <div className="menu__nav-link"><CheckCircleOutlineOutlinedIcon /><MenuItem /></div>
                    <div className="menu__nav-link"><NotificationsNoneOutlinedIcon /><MenuItem /></div>
                    <div className="menu__nav-link"><EqualizerOutlinedIcon /><MenuItem /></div>
                </div>
                <hr />
                <div className="menu__members">
                    <div className="menu__section-header">
                        <PeopleOutlineIcon />
                    </div>
                </div>
                <hr />
                <div className="menu__board-container">
                    <div className="menu__section-header">
                        <ComputerOutlinedIcon />
                    </div>
                </div>
                <hr />
                <div className="menu__invite-container short">
                    <AddIcon />
                </div>
            </nav>
        )
    }

    const renderOpenMenu = () => {
        return (
            <nav className="menu">
                <div className="menu__header">
                    <MenuIcon onClick={toggle} className="menu__toggle" />
                    <div className="menu__header-title">Taskr</div>
                </div>
                <div className="menu__nav-links">
                    <div className="menu__nav-link"><HomeOutlinedIcon /><MenuItem title="Home" /></div>
                    <div className="menu__nav-link"><CheckCircleOutlineOutlinedIcon /><MenuItem title="Tasks" /></div>
                    <div className="menu__nav-link"><NotificationsNoneOutlinedIcon /><MenuItem title="Notifications" /></div>
                    <div className="menu__nav-link"><EqualizerOutlinedIcon /><MenuItem title="Reports" /></div>
                </div>
                <hr />
                <div className="menu__members">
                    <div className="menu__section-header">
                        <PeopleOutlineIcon />
                        <div style={{marginLeft: "8px"}}>Your Team</div>
                    </div>
                    <div className="menu__members-container">
                        <UserInitials userName="Jake Lamb" initials="JL" id="12345" />
                        <UserInitials userName="Tony Stark" initials="TS" id="23456" />
                        <UserInitials userName="Bruce Wayne" initials="BW" id="34567" />
                    </div>
                    <div className="menu__button-container">
                        <Button title="Invite Members" buttonType={ButtonTypes.ICON} iconName="PersonAddOutlined" />
                    </div>
                </div>
                <hr />
                <div className="menu__board-container">
                    <div className="menu__section-header">
                        <ComputerOutlinedIcon />
                        <div style={{marginLeft: "8px"}}>Boards</div>
                    </div>
                    <div className="menu__nav-links">
                        <div className="menu__nav-link"><CheckBoxOutlineBlankIcon /><MenuItem title="Web Development" /></div>
                        <div className="menu__nav-link"><CheckBoxOutlineBlankIcon /><MenuItem title="Project Management" /></div>
                    </div>
                    <div className="menu__button-container">
                        <Button title="New Board" buttonType={ButtonTypes.ICON} iconName="Add" />
                    </div>
                </div>
                <hr />
                <div className="menu__invite-container">
                    <h4 className="invite-header">Invite your team and stay on top of your projects!</h4>
                    <Button title="Invite to Taskr" buttonType={ButtonTypes.DEFAULT} buttonSize={ButtonSizes.FULLWIDTH} />
                </div>
            </nav>
        )
    }

    if (props.open) {
        return renderOpenMenu();
    }
    else {
        return renderCollapsedMenu();
    }
         
}

export default connect()(Menu_Side)
