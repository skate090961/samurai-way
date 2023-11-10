import React from "react";
import {UserType} from "../../../store/reducers/users-reducer/users-reducer";
import axios from "axios";
import Users from "./Users";

interface UsersAPIComponentProps {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    changeFollowingStatus: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

class UsersAPIComponent extends React.Component<UsersAPIComponentProps> {
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
        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            updateCurrentPage={this.updateCurrentPage}
            currentPage={this.props.currentPage}
            changeFollowingStatus={this.props.changeFollowingStatus}
            pageSize={this.props.pageSize}
        />
    }
}

export default UsersAPIComponent;