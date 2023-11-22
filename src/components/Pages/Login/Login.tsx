import React from 'react'
import {getAuthUserDataTC} from "../../../store/reducers/auth-reducer/auth-reducer";
import {useAppDispatch} from "../../../store/store";

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