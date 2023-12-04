import React from 'react'
import {useSelector} from "react-redux"
import {selectIsAuth} from "../../../store/auth/auth-selectors"
import {LoginForm} from "./LoginForm/LoginForm"
import s from './Login.module.css'
import {Navigate} from "react-router-dom";

const Login = () => {
    const isAuth = useSelector(selectIsAuth)

    if (isAuth) return <Navigate to={'/profile'}/>
    return (
        <div className={s.login}>
            <LoginForm/>
        </div>
    )
}

export default Login