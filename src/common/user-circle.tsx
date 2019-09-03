import * as React from "react"
import "./user-circle.less"

interface UserProps {
    userName: string;
    initials: string;
    id: string;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
}

class UserInitials extends React.Component<UserProps> {

    public render() {
        return (
            <div className="user-initials" id={this.props.id}>
                <div className="user-initials__container" title={this.props.userName}>
                    {this.props.initials}
                </div>
            </div>
        )
    }
}

export default UserInitials