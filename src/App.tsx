import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pages from "./components/Pages/Pages";
import {getAuthUserDataTC} from "./store/reducers/auth-reducer/auth-reducer";
import {useAppDispatch} from "./store/store";

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
