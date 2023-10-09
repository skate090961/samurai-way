import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../../store/reducers/users-reducer/users-reducer";
import User from "./User/User";

type UsersPropsType = {
    users: UserType[]
    changeSubscriptionStatus: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             changeSubscriptionStatus,
                                             setUsers
                                         }) => {

    const usersList = users.map(u =>
        <User
            key={u.id}
            user={u}
            changeSubscriptionStatus={changeSubscriptionStatus}
        />
    )

    return (
        <ul className={s.users}>
            {usersList}
        </ul>
    );
};

export default Users;