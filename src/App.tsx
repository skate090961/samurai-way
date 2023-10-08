import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pages from "./components/Pages/Pages";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Pages/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
