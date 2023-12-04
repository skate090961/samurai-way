import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import {LinearLoader} from "../Loaders/LinearLoader/LinearLoader";
import {useSelector} from "react-redux";
import {selectAppStatus} from "../../store/app/app-selectors";
import {GlobalError} from "../../app/GlobalError/GlobalError";
import {ToastContainer} from "react-toastify";

type LayoutPropsType = {
}

const Layout: React.FC<LayoutPropsType> = ({
                                               children
                                           }) => {
    const status = useSelector(selectAppStatus)

    return (
        <div className={'app'}>
            {status === 'loading' && <LinearLoader/>}
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