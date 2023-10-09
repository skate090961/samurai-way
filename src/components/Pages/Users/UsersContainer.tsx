import {connect} from "react-redux";
import Users from "./Users";
import {Action, Dispatch} from "redux";
import {changeFollowingStatusAC, setUsersAC, UserType} from "../../../store/reducers/users-reducer/users-reducer";
import {RootReducerType} from "../../../store/reducers/rootReducer";

const mapStateToProps = (state: RootReducerType) => ({
    users: state.usersPage.users
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    changeFollowingStatus: (userId: number) => dispatch(changeFollowingStatusAC(userId)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer