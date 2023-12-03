import React from 'react'
import {useAppDispatch} from "../../../store/store";
import {getAuthUserDataTC} from "../../../store/auth/auth-thunk";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../../store/auth/auth-selectors";
import {Navigate} from "react-router-dom";

const Login = () => {
    const clickHandler = () => dispatch(getAuthUserDataTC())
    const dispatch = useAppDispatch()
    const isAuth = useSelector(selectIsAuth)

    if (isAuth) return <Navigate to={'/'}/>
    return (
        <div>
            <button onClick={clickHandler}>LOG IN</button>
        </div>
    )
}

export default Login