import React, {useEffect} from 'react';
import s from './Users.module.css'
import {setUsersAC, UsersType, UserType} from "../../../store/reducers/users-reducer/users-reducer";
import User from "./User/User";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../../store/reducers/rootReducer";
import {MessagesType} from "../../../store/reducers/message-reducer/message-reducer";

type UsersPropsType = {
    changeFollowingStatus: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const Users = () => {
    const users = useSelector<RootReducerType, UserType[]>(state => state.usersPage.users)

    const dispatch = useDispatch()

    useEffect(() => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(r => {
                    dispatch(setUsersAC(r.data.items))
                })
        }
    }, [])

    const usersList = users.map(u =>
        <User
            key={u.id}
            user={u}
        />
    )

    return (
        <ul className={s.users}>
            {usersList}
        </ul>
    );
};

export default Users;