import React from 'react'
import s from './Users.module.css'
import {setCurrentPageAC} from "../../../store/users/users-reducer"
import User from "./User/User"
import {useSelector} from "react-redux"
import Pagination from "../../Pagination/Pagination"
import {useAppDispatch} from "../../../store/store"
import {
    selectTotalUsersCount,
    selectUsersCurrentPage,
    selectUsersLoading,
    selectUsersPageSize
} from "../../../store/users/users-selectors";
import {useFetchUsers} from "./useFetchUsers";
import {UsersSkeleton} from "./UsersSkeleton";

const Users = () => {
    const dispatch = useAppDispatch()
    const pageSize = useSelector(selectUsersPageSize)
    const currentPage = useSelector(selectUsersCurrentPage)
    const {users} = useFetchUsers(currentPage)
    const totalUsersCount = useSelector(selectTotalUsersCount)
    const isLoading = useSelector(selectUsersLoading)

    const setCurrentPage = (currentPage: number) => dispatch(setCurrentPageAC(currentPage))
    const usersList = users.map(u => <User key={u.id} user={u}/>)
    const totalPagesCount = Math.ceil(totalUsersCount / pageSize)
    const isShowPagination = totalPagesCount >= 2
    const isShowSkeleton = isLoading ? <UsersSkeleton pageSize={pageSize}/> : usersList

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