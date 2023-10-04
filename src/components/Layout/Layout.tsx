import React, {ReactNode} from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import {SidebarType} from "../../store/reducers/sidebar-reducer/sidebar-reducer";

type LayoutPropsType = {
    sidebarData: SidebarType
    children: ReactNode
}

const Layout: React.FC<LayoutPropsType> = ({
                                               sidebarData,
                                               children
                                           }) => {
    return (
        <div className={'app'}>
            <Header/>
            <Sidebar sidebarData={sidebarData}/>
            <div className={'app__content'}>
                {/*pages*/}
                {children}
            </div>
        </div>
    );
};

export default Layout;