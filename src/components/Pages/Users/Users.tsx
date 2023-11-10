import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../../store/reducers/users-reducer/users-reducer";
import User from "./User/User";
import Pagination from "../../Pagination/Pagination";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    users: UserType[]
    changeFollowingStatus: (userId: number) => void
    updateCurrentPage: (currentPage: number) => void
    currentPage: number
}

const Users: React.FC<UsersPropsType> = ({
                                             totalUsersCount,
                                             pageSize,
                                             users,
                                             changeFollowingStatus,
                                             updateCurrentPage,
                                             currentPage
                                         }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    return (
        <div>
            <ul className={s.users}>
                {users.map((user: UserType) =>
                    <User user={user} changeFollowingStatus={changeFollowingStatus}/>
                )}
            </ul>
            {pagesCount >= 2
                ?
                <Pagination
                    updateCurrentPage={updateCurrentPage}
                    pagesCount={pagesCount}
                    currentPage={currentPage}
                />
                :
                null
            }
        </div>
    );
};

export default Users;