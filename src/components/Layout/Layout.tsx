import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={'app'}>
            <Header/>
            <Sidebar/>
            <div className={'app__content'}>
               <Outlet/>
            </div>
        </div>
    );
};

export default Layout;