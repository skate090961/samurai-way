import React from 'react'
import s from './Sidebar.module.css'
import Navbar from "./Navbar/Navbar"
import Friends from "./Friends/Friends"
import {useSelector} from "react-redux"
import {selectIsAuth} from "../../../store/auth/auth-selectors"
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const Sidebar = () => {
    const isAuth = useSelector(selectIsAuth)
    return (
        <div className={s.sidebar}>
            <Navbar/>
            {isAuth && <Friends/>}
        </div>
    )
}

export default withAuthRedirect(Sidebar)