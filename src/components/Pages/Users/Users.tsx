import React, {useEffect} from 'react';
import s from './Users.module.css'
import {UserType} from "../../../store/reducers/users-reducer/users-reducer";
import User from "./User/User";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    changeFollowingStatus: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             changeFollowingStatus,
                                             setUsers
                                         }) => {

    useEffect(() => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(r => {
                    setUsers(r.data.items)
                })
        }
    }, [] )

    const usersList = users.map(u =>
        <User
            key={u.id}
            user={u}
            changeFollowingStatus={changeFollowingStatus}
        />
    )

    return (
        <ul className={s.users}>
            {usersList}
        </ul>
    );
};

export default Users;