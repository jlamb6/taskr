import * as React from "react"
import "./menu.less"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import UserInitials from "../../common/user-circle";

export enum FilterTypes {
    INCOMPLETE = "incomplete",
    OWN = "own"
}

interface HeaderProps {
    boardName: string,
    boardDescription: string,
    subscribed: boolean,
    lastActivity: Date,
    userId: string
    isStarred: boolean,
    filters?: FilterTypes
}

class BoardHeader extends React.Component<HeaderProps> {

    public render() {

        const {boardName, boardDescription, subscribed, lastActivity, userId, isStarred } = this.props;

        return (
            <div className="board-header">
                <div className="board-header__section-one">
                    <div>
                        <div className="board-header__board-img"></div>
                        <div className="board-header__title">
                            {boardName}
                        </div>
                    </div>
                </div>
                <div className="board-header__section-two">
                    <button>New</button>
                    <InfoOutlinedIcon />
                    <NotificationsNoneOutlinedIcon />
                    <UserInitials userName="Jacob Lamb" initials="JL" id="1234"/>
                </div>
            </div>
        )
    }
}

export default BoardHeader