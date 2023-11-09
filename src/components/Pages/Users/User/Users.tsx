import React from "react";
import usersStyle from "../Users.module.css";
import userStyle from './User.module.css'
import {UserType} from "../../../../store/reducers/users-reducer/users-reducer";
import userPhoto from "../../../../assets/images/user-avatar-default.jpg";
import axios from "axios";

class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(r => {
                this.props.setUsers(r.data.items)
            })
    }

    render() {
        return (
            <div>
                <ul className={usersStyle.users}>
                    {this.props.users.map((u: UserType) =>
                        <li className={userStyle.user} key={u.id}>
                            <img src={u.photos.large !== null ? u.photos.large : userPhoto} alt="user-avatar"
                                 className={userStyle.user__avatar}/>
                            <div className={userStyle.user__info}>
                                <span className={userStyle.user__name}>{u.name}</span>
                                <span className={userStyle.user__location}>{'Russia, Moscow1'}</span>
                                <span className={userStyle.user__status}>{u.status}</span>
                            </div>
                            <div className={userStyle.user__button_container}>
                                <button
                                    className={`${userStyle.subscribe__button} ${u.followed ? userStyle.unfollow_color : userStyle.follow_color}`}
                                    onClick={() => this.props.changeFollowingStatus(u.id)}
                                >
                                    {u.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                        </li>
                    )
                    }
                </ul>
            </div>
        )
    }
}

export default Users;