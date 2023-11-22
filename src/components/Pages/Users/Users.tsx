import React, {useEffect} from 'react'
import s from './Users.module.css'
import {setCurrentPageAC, setUsersTC,} from "../../../store/reducers/users-reducer/users-reducer"
import User from "./User/User"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../store/reducers/rootReducer"
import Pagination from "../../Pagination/Pagination"
import UserSkeleton from "./UserSkeleton/UserSkeleton"
import {UserType} from "../../../api/users-api"
import {useAppDispatch} from "../../../store/store"

const Users = () => {
    const users = useSelector<RootStateType, UserType[]>(state => state.usersPage.users)
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<RootStateType, number>(state => state.usersPage.currentPage)
    const totalUsersCount = useSelector<RootStateType, number>(state => state.usersPage.totalUsersCount)
    const isLoading = useSelector<RootStateType, boolean>(state => state.usersPage.isLoading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUsersTC())
    }, [currentPage])

    const setCurrentPage = (currentPage: number) => dispatch(setCurrentPageAC(currentPage))
    const usersList = users.map(u => <User key={u.id} user={u}/>)

    const usersSkeleton = Array.from({length: pageSize}, ((_, index) => <UserSkeleton key={index}/>))
    const totalPagesCount = Math.ceil(totalUsersCount / pageSize)
    const isShowPagination = totalPagesCount >= 2
    const isShowSkeleton = isLoading ? usersSkeleton : usersList

    return (
        <div>
            <ul className={s.users}>
                {isShowSkeleton}
            </ul>
            {isShowPagination
                ?
                <Pagination
                    totalPagesCount={totalPagesCount}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    isLoading={isLoading}
                />
                :
                <></>
            }
        </div>
    )
}

export default Users