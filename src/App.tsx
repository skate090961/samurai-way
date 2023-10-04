import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pages from "./components/Pages/Pages";

type AppPropsType = {
    store: any
}

const App: React.FC<AppPropsType> = ({
                                         store
                                     }) => {
    const sidebarState = store.getState().sidebar
    return (
        <BrowserRouter>
            <Layout sidebarData={sidebarState}>
                <Pages store={store}/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
