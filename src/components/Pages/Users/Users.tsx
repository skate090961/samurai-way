import React, {useEffect, useState} from 'react';
import s from './Users.module.css'
import {
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UserType
} from "../../../store/reducers/users-reducer/users-reducer";
import User from "./User/User";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../../store/reducers/rootReducer";
import Pagination from "../../Pagination/Pagination";
import UserSkeleton from "./Skeleton/UserSkeleton";

const Users = () => {
    const users = useSelector<RootReducerType, UserType[]>(state => state.usersPage.users)
    const pageSize = useSelector<RootReducerType, number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<RootReducerType, number>(state => state.usersPage.currentPage)
    const totalUsersCount = useSelector<RootReducerType, number>(state => state.usersPage.totalUsersCount)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then(r => {
                dispatch(setUsersAC(r.data.items))
                dispatch(setTotalUsersCountAC(r.data.totalCount))
                setIsLoading(false)
            })
    }, [currentPage])

    const setCurrentPage = (currentPage: number) => dispatch(setCurrentPageAC(currentPage))

    const usersList = users.map(u =>
        <User
            key={u.id}
            user={u}
        />
    )
    const usersSkeleton = users.map(u => <UserSkeleton/>)


    const totalPagesCount = Math.ceil(totalUsersCount / pageSize)
    return (
        <div>
            <ul className={s.users}>
                {isLoading ? usersSkeleton : usersList}
            </ul>
            {totalPagesCount >= 2 || !isLoading
                ?
                <Pagination
                    totalPagesCount={totalPagesCount}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
                :
                null
            }
        </div>
    );
};

export default Users;