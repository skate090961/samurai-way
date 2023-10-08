import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

type LayoutPropsType = {
}

const Layout: React.FC<LayoutPropsType> = ({
                                               children
                                           }) => {
    return (
        <div className={'app'}>
            <Header/>
            <Sidebar/>
            <div className={'app__content'}>
                {/*pages*/}
                {children}
            </div>
        </div>
    );
};

export default Layout;