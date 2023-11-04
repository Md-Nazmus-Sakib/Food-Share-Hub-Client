import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Component/Common/NavigationBar/NavigationBar';
import FooterBar from '../Component/Common/FooterBar/FooterBar';


const MainLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <FooterBar></FooterBar>
        </div>
    );
};

export default MainLayout;