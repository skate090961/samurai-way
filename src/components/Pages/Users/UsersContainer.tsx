import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {
    changeFollowingStatusAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UserType
} from "../../../store/reducers/users-reducer/users-reducer";
import {RootReducerType} from "../../../store/reducers/rootReducer";
import UsersAPIComponent from "./UsersAPIComponent";

const mapStateToProps = (state: RootReducerType) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    changeFollowingStatus: (userId: number) => dispatch(changeFollowingStatusAC(userId)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage))
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer