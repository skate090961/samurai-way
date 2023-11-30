import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pages from "./components/Pages/Pages";
import {useAppDispatch} from "./store/store";
import {getAuthUserDataTC} from "./store/auth/auth-thunk";

const App = () => {
    //чтобы не вылогиниваться пре перезагрузке страницы
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, [])

    return (
        <BrowserRouter>
            <Layout>
                <Pages/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
