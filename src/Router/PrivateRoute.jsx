import React from 'react';
import useAuth from '../Hook/useAuth';
import { useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }
    if (user) {
        return children;
    }
    return (<Navigate to={'/login'} state={{ form: location }} replace></Navigate>);
};



export default PrivateRoute;