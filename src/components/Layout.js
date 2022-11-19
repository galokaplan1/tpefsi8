import React from "react";
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from "./Nav";

const Layout = () => {

    return (
        <React.Fragment>
            <Header />
            <Outlet className="content-body" />
            <Footer />
        </React.Fragment>
    )
} 

export default Layout;