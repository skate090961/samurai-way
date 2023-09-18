import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {SidebarType} from "../../state/state";

type LayoutPropsType = {
    sidebarData: SidebarType
}

const Layout: React.FC<LayoutPropsType> = ({
                                               sidebarData
                                           }) => {
    return (
        <div className={'app'}>
            <Header/>
            <Sidebar sidebarData={sidebarData}/>
            <div className={'app__content'}>
               <Outlet/>
            </div>
        </div>
    );
};

export default Layout;