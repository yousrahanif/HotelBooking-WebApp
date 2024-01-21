import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import DisplayPic from '../DisplayPic/DisplayPic';


const Layout = () => {
    return (
        <div>
        <Header></Header>
        
        <Outlet></Outlet>
        
        </div>
    );
};

export default Layout;