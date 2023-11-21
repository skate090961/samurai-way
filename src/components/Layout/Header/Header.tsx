import React from 'react';
import s from './Header.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../../../store/reducers/rootReducer";
import {setAuthUserDataTC} from "../../../store/reducers/auth-reducer/auth-reducer";
import {useAppDispatch} from "../../../store/store";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const Header = () => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const clickHandler = () => dispatch(setAuthUserDataTC())
    const dispatch = useAppDispatch()

    return (
        <header className={s.header}>
            <img
                src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/6/2/f/62f64963b3b8eda573996bdfb646729e818ef77b.png"
                alt="logo"
                className={s.logo}
            />
            <div className={s.login_container}>
                {isAuth
                    ?
                    <ProfileDropdown/>
                    :
                    <a onClick={clickHandler}>Login</a>
                }
            </div>
        </header>
    );
};

export default Header;