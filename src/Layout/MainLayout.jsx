import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Component/Common/NavigationBar/NavigationBar';


const MainLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;