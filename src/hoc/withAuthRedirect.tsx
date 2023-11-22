import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"
import {RootStateType} from "../store/reducers/rootReducer"
import React from "react"

export const withAuthRedirect = (Component: any) => {

    const AuthRedirectComponent = () => {
        const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
        return isAuth ? <Component {...Component.props}/> : <Navigate to={'/login'}/>
    }

    return AuthRedirectComponent
}