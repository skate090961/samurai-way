import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"
import React from "react"
import {selectIsAuth} from "../store/auth/auth-selectors";

export const withAuthRedirect = (Component: any) => {

    const AuthRedirectComponent = () => {
        const isAuth = useSelector(selectIsAuth)
        return isAuth ? <Component {...Component.props}/> : <Navigate to={'/login'}/>
    }

    return AuthRedirectComponent
}