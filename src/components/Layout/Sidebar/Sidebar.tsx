import React from 'react';
import s from './Sidebar.module.css'
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";
import {SidebarType} from "../../../store/reducers/sidebar-reducer/sidebar-reducer";

type SidebarPropsType = {
    sidebarData: SidebarType
}

const Sidebar: React.FC<SidebarPropsType> = ({
                                                 sidebarData
                                             }) => {
    return (
        <div className={s.sidebar}>
            <Navbar/>
            <Friends friendsData={sidebarData.friends}/>
        </div>
    );
};

export default Sidebar;