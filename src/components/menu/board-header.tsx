import * as React from "react"
import "./menu.less"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import UserInitials from "../../common/user-circle";
import { Icon, IconColor } from "../../common/icons"
import { Button, ButtonTypes, ButtonSizes } from "../../common/button"

export enum FilterTypes {
    INCOMPLETE = "incomplete",
    OWN = "own"
}

interface HeaderProps {
    boardName: string;
    boardDescription: string;
    subscribed: boolean;
    lastActivity: Date;
    userId: string;
    isStarred: boolean;
    filters?: FilterTypes;
}

class BoardHeader extends React.Component<HeaderProps> {

    public render() {

        const {boardName, boardDescription, subscribed, lastActivity, userId, isStarred } = this.props;

        return (
            <div>
                <div className="board-header">
                    <div className="board-header__section-one">
                        <div className="board-header__board-img bg-red"></div>
                        <div>
                            <div className="board-header__title">
                                {boardName}
                            </div>
                            <div className="board-header__icons">
                                {Icon({name: "VisibilityOutlined", small: true, color: IconColor.GREY})}
                                {Icon({name: "StarBorderOutlined", small: true, color: IconColor.GREY})}
                                {Icon({name: "InfoOutlined", small: true, color: IconColor.GREY})}
                                <Button title="Share" iconName="GroupOutlined" buttonType={ButtonTypes.ICON} buttonSize={ButtonSizes.SMALL} fontColor="light-grey" />
                            </div>
                        </div>
                    </div>
                    <div className="board-header__section-two">
                        <Button title="New" buttonType={ButtonTypes.NO_BORDER_ICON} iconName="Add" fontColor="white" backgroundColor="linear-gradient(to top right, #ff5263 0%, #ff7381 35%, #fcbd01 100%)" buttonSize={ButtonSizes.MEDIUM} />
                        {Icon({name: "InfoOutlined", color: IconColor.GREY})}
                        {Icon({name: "NotificationsNoneOutlined", color: IconColor.GREY})}
                        <UserInitials userName="Jacob Lamb" initials="JL" id="1234"/>
                    </div>
                </div>
                <div className="subheader-wrapper">
                    <div className="board-subheader">
                        <div className="board-subheader__section-one">
                            {boardDescription}
                        </div>
                        <div className="board-subheader__section-two">
                            <div>Last Activity: {lastActivity}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardHeader