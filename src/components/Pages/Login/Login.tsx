import React from 'react'
import {useAppDispatch} from "../../../store/store";
import {getAuthUserDataTC} from "../../../store/auth/auth-thunk";

const Login = () => {
    const clickHandler = () => dispatch(getAuthUserDataTC())
    const dispatch = useAppDispatch()

    return (
        <div>
            <button onClick={clickHandler}>LOG IN</button>
        </div>
    )
}

export default Login