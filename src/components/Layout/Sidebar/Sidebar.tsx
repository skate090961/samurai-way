import React from 'react';
import s from './Sidebar.module.css'
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";

type SidebarPropsType = {}

const Sidebar: React.FC<SidebarPropsType> = ({}) => {
    return (
        <div className={s.sidebar}>
            <Navbar/>
            <Friends/>
        </div>
    );
};

export default Sidebar;