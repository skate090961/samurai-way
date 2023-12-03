import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Pages from "../components/Pages/Pages";
import {useAppDispatch} from "../store/store";
import {setAppInitializedTC} from "../store/app/app-thunk";
import {useSelector} from "react-redux";
import {selectIsInitialized} from "../store/app/app-selectors";
import {GlobalError} from "./GlobalError/GlobalError";

const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useSelector(selectIsInitialized)
    useEffect(() => {
        dispatch(setAppInitializedTC())
    }, [])

    return (
        <>
            {isInitialized
                ?
                    <Layout>
                        <Pages/>
                    </Layout>
                :
                <div>LOAD APP</div>
            }
            <GlobalError />
        </>

    );
}

export default App;
