import React from 'react';
import s from './Sidebar.module.css'
import Menu from "./Menu/Menu";
import Friends from "./Friends/Friends";
import {SidebarType} from "../../../state/state";

type SidebarPropsType = {
    sidebarData: SidebarType
}

const Sidebar: React.FC<SidebarPropsType> = ({
                                                 sidebarData
                                             }) => {
    return (
        <div className={s.sidebar}>
            <Menu/>
            <Friends friendsData={sidebarData.friends}/>
        </div>
    );
};

export default Sidebar;