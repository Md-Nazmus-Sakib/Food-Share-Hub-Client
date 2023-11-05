import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../../assets/images/icon/icon1.png'
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import Swal from 'sweetalert2';
import { Spinner } from 'flowbite-react';

const NavigationBar = () => {
    const { user, logOut, loading } = useAuth();
    // console.log(user)
    // Active route 
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    if (loading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }
    const handelLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Log Out',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div className='g-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
            <Navbar fluid rounded className='bg-green-300'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Food Share Hub</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? <Dropdown
                            arrowIcon={false}
                            inline

                            label={
                                <Avatar alt="User settings" img={user?.photoURL} rounded />
                            }
                        >

                            <Dropdown.Header>
                                <span className="block text-sm">{user?.displayName}</span>
                                <span className="block truncate text-sm font-medium">{user?.email}</span>
                            </Dropdown.Header>

                            <Dropdown.Item onClick={handelLogOut}>Sign out</Dropdown.Item>
                        </Dropdown> : <NavLink className='font-semibold' to={'/login'}>Login</NavLink>

                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active={activeLink === '/'}> Home </Navbar.Link>
                    <Navbar.Link href="/available" active={activeLink === '/available'}>Available Food</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default NavigationBar;