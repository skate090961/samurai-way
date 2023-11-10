import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../../store/reducers/users-reducer/users-reducer";
import axios from "axios";
import User from "./User/User";
import Pagination from "../../Pagination/Pagination";

interface UsersProps {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    changeFollowingStatus: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

class Users extends React.Component<UsersProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(r => {
                this.props.setUsers(r.data.items)
                this.props.setTotalUsersCount(r.data.totalCount)
            })
    }

    updateCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then(r => {
                this.props.setUsers(r.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        return (
            <div>
                <ul className={s.users}>
                    {this.props.users.map((user: UserType) =>
                        <User user={user} changeFollowingStatus={this.props.changeFollowingStatus}/>
                    )}
                </ul>
                <Pagination
                    updateCurrentPage={this.updateCurrentPage}
                    pagesCount={pagesCount}
                    currentPage={this.props.currentPage}
                />
            </div>

        )
    }
}

export default Users;