import * as React from "react"
import "./menu.less"
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import UserInitials from "../../common/user-circle";
import { Button, ButtonTypes } from "../../common/button"

interface MenuItemProps {
    title: string;
    icon?: string;
}

class MenuItem extends React.Component<MenuItemProps> {
    public render() {
        return (
            <a>
                <div style={{marginLeft: "8px"}}>{this.props.title}</div>
            </a>
        )
    }
}

//need to set icon font-size to 1.2em

class Menu_Side extends React.Component<{}> {

    public render() {
        return (
            <nav className="menu">
                <div className="menu__header">
                    <div>Taskr</div>
                    <MenuIcon />
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
                        <Button title="Invite Members" buttonType={ButtonTypes.ICON}/>
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
                </div>
            </nav>
        )
    }
}

export default Menu_Side
